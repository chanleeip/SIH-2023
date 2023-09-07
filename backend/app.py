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
    user.insert_one({'id':1})
    return {'status':2}


if __name__=="__main__":
    app.run(debug=True)