import React, { useState } from 'react';
function Parse() {
    const [file, setFile] = useState(null);
  
    const handleFileChange = (event) => {
      setFile(event.target.files[0]);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      
      const formData = new FormData();
      formData.append('pdf_file', file);
  
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData
      });
  
      if (response.ok) {
        console.log('File uploaded successfully');
      } else {
        console.error('Error uploading file');
      }
    };
  
    return (
      <div className='mt-20'>
        <label>
            Choose 1st file:
            <input type="file" onChange={handleFileChange} />
          </label>
          <label>
            Choose 2nd file:
            <input type="file" onChange={handleFileChange} />
          </label>
          <label>
            Choose 3rd file:
            <input type="file" onChange={handleFileChange} />
          </label>
        <form onSubmit={handleSubmit}>
          <label>
            Choose 4th file:
            <input type="file" onChange={handleFileChange} />
          </label>
          <button type="submit">Upload</button>
        </form>
      </div>
    );
  }
  
  export default Parse;

