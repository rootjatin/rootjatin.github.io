import pymongo
from flask import Flask, jsonify, request
client = pymongo.MongoClient("mongodb+srv://rajcre:qwertyuiop@cluster0.6avc3.mongodb.net/app_users?retryWrites=true&w=majority")
db= client.get_database("app_users")
record=db.records
db2= client.get_database("shopping_items")
record2=db2.shopping_list
app= Flask(__name__)
@app.route("/message", methods=["POST"])
def message():
    posted_data = request.get_json()
    record.insert_one(posted_data)
    return {'message':"you have successfully signed up "}

@app.route("/message", methods=["POST"])
def message1():
    posted_data = request.get_json()
    return posted_data['email']


@app.route("/loginpass", methods=["POST"])
def loginpass():
    posted_data = request.get_json()
    ee=posted_data['email']
    pp=posted_data['password']
    ll=list(record.find_one({'email': ee}))
    if (ll['password']== pp):
        return ({'message':"you have successfully logged"})
    else:
        return({'error':"email or password does not match"})
    return {'message':"you have successfully signed up "}


@app.route("/cartlist", methods=["POST"])
def cartlist():
    posted_data = request.get_json()
    ee=posted_data['email']
    pp=posted_data['password']
    ll=list(record.find_one({'email': ee}))
    list2=[]
    if (ll['password']== pp):
        for i in range(0,len(list1['cart'])):
            list2.append(record2.find_one({'item': list1['cart'][i]}))

        return list2
    else:
        return({'error':"email or password does not match"})
    return {'message':"you have successfully signed up "}
  
if __name__ == "__main__": 
        app.run()
