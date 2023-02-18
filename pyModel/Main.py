from flask import Flask, request
from Resume_Shortlister import main
import os
from flask_cors import CORS
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'resume'
CORS(app,origins="*",supports_credentials=False)
@app.route('/')
def index():
        return "hello wrld"
    
@app.route('/predict', methods=['POST'])
def predict():
    file = request.files['pdf_file']
    file.save(os.path.join('resumes', file.filename))
    main()
    # Perform prediction on the file using your machine learning library of choice
    return "prediction"

if __name__ == '__main__':
    app.run(debug=True)
