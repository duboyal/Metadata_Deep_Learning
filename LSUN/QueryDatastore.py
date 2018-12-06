from google.cloud import datastore

client = datastore.Client()
query = client.query(kind='Collection')
query.add_filter('name','=','macro')
collections = list(query.fetch())

# Assume 1 collection, but there might be more with the same name!
collection = collections[0]

query = client.query(kind='Image')
query.add_filter('collection','=',collection.key)
images = list(query.fetch())

l = []
for image in images:
    l.append([image.get('thumbnail'),image.get('image_name')]) # This changes according to dataset

#Write the query output in a file
f = open('dump.txt','w')
for i in l:
    f.write("%s\n"%i)

f.close()
