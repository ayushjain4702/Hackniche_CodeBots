import React from "react";

function VideoCall() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="Img.png"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col space-y-6">
            <div className="text-gray-900 text-4xl title-font font-bold mb-1">
              Connect With The Organizers
            </div>

            <div className="leading-relaxed text-lg">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </div>

            <div className="flex mx-auto ">
              <button className="text-white bg-blue-700 border-0 py-4 px-8 focus:outline-none hover:bg-indigo-600 rounded-lg text-2xl">
                <a href="https://chat.1410inc.xyz/">Start Video Conference</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoCall;
