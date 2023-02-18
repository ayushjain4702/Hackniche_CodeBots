import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Parse() {
  const [file, setFile] = useState(null);
 const [hide, setHide] = useState(false);
const [result, setResult] = useState(''); 

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("pdf_file", file);

    const response = await fetch("http://localhost:5000/predict", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
        const data = await response.json()
      console.log("File uploaded successfully");
      console.log(data[0]);
      setResult(data[0]);
    } else {
      console.error("Error uploading file");
    }
  };

  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit1 = (event) => {
    event.preventDefault();
    setHide(true);

    return;
  };

//   const output=(inputString) => {
   
// const parts = inputString.match(/([a-z]+)(\d+)/gi);

// const formattedString = parts.map((part) => {
//   const [name, value] = part.match(/([a-z]+)(\d+)/i).slice(1);
//   return name.charAt(0).toUpperCase() + name.slice(1) + ":" + value;
// }).join(" ");

// // console.log(formattedString); // output: Ayush:4 Rudra:4 Meet:4 Sahej:5

//     parts = formattedString.split(" ");
    
//     const jsonObject = {};
    
//     for (let i = 0; i < parts.length; i++) {
//       const [name, value] = parts[i].split(":");
//       jsonObject[name] = value;
//     }
    
//     console.log(jsonObject);
    
//   }
  let total =0 
  return (
    <section className="text-gray-600 body-font ">
      <form onSubmit={handleSubmit1} className="max-w-full flex my-8 ml-10">
        <div>
          <label className="block text-gray-700 text-lg font-semibold mb-2">
            Enter Team Name:
            <input
              type="text"
              value={text}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
        {hide && (
          <p className="mt-4 text-5xl text-black ml-10">
            Welcome Team {text} !!!
          </p>
        )}
      </form>
      <div className="container px-5 pb-24 pt-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Resume Upload
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
            Upload the Resumes of your team members
          </p>
        </div>

        <div className="ml-[38%]">
          <div className="flex-1 ">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Member 1
              </h2>
              <label>
                Choose 1st file:
                <input
                  className="bg-slate-200 rounded-lg pl-2 py-2 inline-flex items-center"
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                />
              </label>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Member 2
              </h2>
              <label>
                Choose 2nd file:
                <input
                  className="bg-slate-200 rounded-lg pl-2 py-2 inline-flex items-center"
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                />
              </label>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Member 3
              </h2>
              <label>
                Choose 3rd file:
                <input
                  className="bg-slate-200 rounded-lg pl-2 py-2 inline-flex items-center"
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <form onSubmit={handleSubmit}>
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Member 4
              </h2>
              <label>
                Choose 4th file:
                <input
                  className="bg-slate-200 rounded-lg pl-2 py-2 inline-flex items-center"
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                />
              </label>

              {/* // <button type="submit">Upload</button> */}

              <button
                type="submit"
                className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Upload
              </button>
              <NavLink to="/about">
            <button class="flex mx-auto mt-8 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Go Back
            </button>
          </NavLink>
            </form>
            <br></br>
            {result && <>Result: {
                result.map((u)=>
                <>
                <p>{u[0]} { u[1]}</p>
                
                {total += u[1]}

                </>
                )              
                } 
                Total = {total}</>} 


            
            
          </div>
        </div>
      </div>
    </section>

   
  );
}

export default Parse;