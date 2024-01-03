import random

import requests
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

# Get all assistants
# https://bluejack.binus.ac.id/lapi/api/Assistant/All

# Picture
# https://socs1.binus.ac.id/messier/GeneralWeb.svc/GetThumbnail/{picture_id}/300

@app.route('/assistants', methods=['GET'])
def assistants():
  response = requests.get('https://bluejack.binus.ac.id/lapi/api/Assistant/All')
  if response.status_code == 200:
    data = response.json() # Return a dictionary
    list = data.get('active', []) + data.get('inactive', [])
    random.shuffle(list)
    list = list[:100]
    for value in list:
      picture_id = value.get('PictureId', '')
      value['PictureLink'] = f'https://socs1.binus.ac.id/messier/GeneralWeb.svc/GetThumbnail/{picture_id}/300'
    return jsonify(list)
  return 'Error occured', 500

@app.route('/post', methods=['POST'])
def post():
  return request.get_json() 

@app.route('/', methods=['GET'])
def test():
  
  # Trigger the debugger activation
  # x = 1 / 0

  return 'Hello World'



if __name__ == '__main__':
  app.run(debug=True, port=5000)


