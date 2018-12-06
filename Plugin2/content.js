chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	if (request.todo == "execute"){
		send();
	}
})

/*var button = document.getElementsByClassName('jss67 jss124 jss125');
if (button.length > 0){
	button[0].addEventListener('click',function(e){
		send();
	});
}*/

function createXmlHttpRequestObject(){
	var xmlHttp;

	if(window.ActiveXObject){
    try{
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }catch(e){
        xmlHttp = false;
    }
	}else{
    try{
        xmlHttp = new XMLHttpRequest();
    }catch(e){
        xmlHttp = false;
    }
	}

	if(!xmlHttp)
    alert("Cant create that object !");
	else
    return xmlHttp;
}

function send(){
  var deselected_images = document.getElementsByClassName("image-block selected");
	var d = []
	for (i=0; i < deselected_images.length; i++){
		var b = deselected_images[i].getElementsByTagName("img");
		d.push(b[0].src); //Image source
	}
	var valPassed = "";
	for (i =0; i < d.length; i++){
		valPassed += d[i] + ",";
	}

	var lassoed_images = document.getElementsByClassName("image-block");
	var l =[]
	for (i=0; i < lassoed_images.length; i++){
		var b = lassoed_images[i].getElementsByTagName("img");
		l.push(b[0].src); //Image source
	}
	var valPassed2 = "";
	for (i = 0; i < l.length; i++){
		valPassed2 += l[i] + ",";
	}
	if (valPassed.length > 0 || valPassed2.length > 0){
		var xmlHttp = createXmlHttpRequestObject();
		if(xmlHttp.readyState==0 || xmlHttp.readyState==4){
			xmlHttp.open("GET","http://localhost:8080/Plugin2/script.php?deselect=" + valPassed + "&lasso=" + valPassed2,true);
  		//xmlHttp.onreadystatechange = handleServerResponse;
			xmlHttp.send(null);
		}
		else{
	    setTimeout('process()',1000);
		}
	}
}


function handleServerResponse(){
	if(xmlHttp.readyState==4){
    if(xmlHttp.status==200){
        xmlResponse = xmlHttp.responseXML;
        xmlDocumentElement = xmlResponse.documentElement;
        message = xmlDocumentElement.firstChild.data;
        document.getElementById("underInput").innerHTML = '<span style="color: blue">' + message  + '</span>';
        setTimeout('process()', 1000);
    }
		else{
        alert('Someting went wrong !');
    }
	}
}
