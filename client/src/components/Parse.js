import React, { useState } from "react";
function Parse() {
  const [file, setFile] = useState(null);

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
      console.log("File uploaded successfully");
    } else {
      console.error("Error uploading file");
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pb-24 pt-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Resume Upload
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
            Upload the Resumes of your team members
          </p>
        </div>
        <div className="flex flex-wrap">
          <div></div>
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
              Choose 1st file:
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
          </form>
        </div>
      </div>
    </section>

    // <label>
    //     Choose 1st file:
    //     <input type="file" onChange={handleFileChange} />
    //   </label>
    //   <label>
    //     Choose 2nd file:
    //     <input type="file" onChange={handleFileChange} />
    //   </label>
    //   <label>
    //     Choose 3rd file:
    //     <input type="file" onChange={handleFileChange} />
    //   </label>
    // <form onSubmit={handleSubmit}>
    //   <label>
    //     Choose 4th file:
    //     <input type="file" onChange={handleFileChange} />
    //   </label>
    //   <button type="submit">Upload</button>
    // </form>
  );
}

export default Parse;
