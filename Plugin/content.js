chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	if (request.todo == "execute"){
		//send();
	}
})

var checkExist = setInterval(function(){
	var a = document.getElementsByClassName('jss65 jss128 jss129');
	if (a.length > 0){
		//alert('found!');
		for (var i = 0; i < a.length; i++){
			a[i].addEventListener('click',function(){
				send_deselect();
				send_lasso();
			});
		}

	}
}, 1000);

var checkExistB = setInterval(function(){
	var b = document.getElementsByClassName('jss32');
	if (b.length > 0){
		//alert('found!');
		for (var i = 0; i < b.length; i++){
			b[i].addEventListener('click',function(){
				send_deselect();
				send_lasso();
			});
		}
	}
},1000);

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

function send_deselect(){
	//alert("awdd");
  var deselected_images = document.getElementsByClassName("image-block selected");
	for (i=0; i < deselected_images.length; i++){
		var b = deselected_images[i].getElementsByTagName("img");
		var c = b[0].src; //Image source
		var xmlHttp = createXmlHttpRequestObject();
		if(xmlHttp.readyState==0 || xmlHttp.readyState==4){
			xmlHttp.open("GET","http://localhost:8080/Plugin/script_deselect.php?data="+c,true);
  		//xmlHttp.onreadystatechange = handleServerResponse;
			xmlHttp.send(null);
		}
		else{
	    setTimeout('process()',1000);
		}
	}
}

function send_lasso(){
	var lassoed_images = document.getElementsByClassName("image-block");
	for (i=0; i < lassoed_images.length; i++){
		var b = lassoed_images[i].getElementsByTagName("img");
		var c = b[0].src; //Image source
		var xmlHttp = createXmlHttpRequestObject();
		if(xmlHttp.readyState==0 || xmlHttp.readyState==4){
			xmlHttp.open("GET","http://localhost:8080/Plugin/script_lasso.php?data="+c,true);
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
