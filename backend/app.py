from flask import Flask, jsonify, request
import pymongo, os 
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
server = pymongo.MongoClient(os.getenv('mongoclient'))
db = server['db']
user = db['users']

@app.route('/')
def home():
    user.insert_one({'id':1000})
    return {'status':2}

@app.post('/api/register')
def register():
    data = request.get_json()
    username = data['username']
    comapny_name = data['company_name']
    profession = data['profession']
    password = data['password']
    user.insert_one({'username' : username,
                    'company_name' :comapny_name,
                    'profession' : profession,
                    'password' : password,})
    return {'status':False, 'message':'User Registered'}


@app.post('/api/login')
def login():
    data = request.get_json()
    print(data)
    # 
    # 
    # 
    return {'status':True}




if __name__=="__main__":
    app.run(debug=True ,host='192.168.0.139')