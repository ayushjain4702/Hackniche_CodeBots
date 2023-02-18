import React from "react";
import { BuildingOfficeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import {
  CalendarIcon,
  EyeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div className="bg-slate-300 w-full">
      {/* topcomp */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-5 sm:py-32">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Hackanova
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Thakur College of Engineering & Technology is pleased to announce
              the 2nd edition of Hackanova, our most awaited technical event.
              TCET's Hackanova aims at holding hackathons on the social themes
              and building their solutions through technology, spreading an
              endless technical exposure. The theme of Hackanova 2.0 is
              Technology for the Social Good.
            </p>
          </div>
          <div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  Offices worldwide
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  12
                </dd>
              </div>

              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  Full-time colleagues
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  300+
                </dd>
              </div>

              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  Hours per week
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  40
                </dd>
              </div>

              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  Paid time off
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  Unlimited
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      {/* main */}
      <div className="px-10 bg-slate-300">
        {/* collegecard */}
        <div className="bg-slate-200 rounded-2xl p-10 m-5 my-16 space-y-5">
          <h1 className="font-bold text-4xl mx-3 my-5 mb-10">HackNova 2023</h1>
          <h2 className="flex space-x-4 text-lg">
            <BuildingOfficeIcon className="h-8 w-8" />
            {/* https://unstop.com/c/shri-vile-parle-kelavani-mandals-dwarkadas-j-sanghvi-college-of-engineering-djsce-mumbai-placement-interview-competitions-articles-videos-289 */}
            <p>
              Shri Vile Parle Kelavani Mandal's Dwarkadas J. Sanghvi College of
              Engineering (DJSCE), Mumbai
            </p>
          </h2>
          <h2 className="flex space-x-4 text-lg">
            <MapPinIcon className="h-8 w-8" />
            <p>
              Dwarkadas Jivanlal Sanghvi College of Engineering, Mumbai,
              Maharashtra, India
            </p>
          </h2>
          <div className="flex flex-wrap max-w-full">
            <div className="md:text-base flex p-3 text-xs space-x-2">
              <div className="bg-white rounded-2xl p-3 px-4">
                #Coding Challenge
              </div>
              <div className="bg-white rounded-2xl p-3 px-4">#Hackathon</div>
              <div className="bg-white rounded-2xl p-3 px-4">#Engineering</div>
              <div className="bg-white rounded-2xl p-3 px-4">#Presentation</div>
              <NavLink to="/parse">
                <div className="bg-blue-700 text-white font-semibold text-xl rounded-2xl p-3 px-4 ml-10">
                  Register Team
                </div>
              </NavLink>
              <NavLink to="/parse">
                <div className="bg-indigo-900 text-white font-semibold text-xl rounded-2xl p-3 px-4 ml-10">
                  Registered Team Details
                </div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 md:gap-7 justify-between px-5">
          {/* freecard */}
          <div className=" bg-slate-200 rounded-2xl p-3 pr-6 py-7 mb-5">
            <h1 className="text-3xl font-bold p-3 mb-7">Free</h1>
            <div className="flex flex-col space-y-5">
              <div className="flex ">
                <div className="p-3">
                  <UserGroupIcon className="h-8 w-8 text-blue-600 border-2 border-blue-600 rounded-lg p-0.5" />
                </div>
                <div>
                  <p>Registered</p>
                  <p>1,099</p>
                </div>
              </div>
              <div className="flex">
                <div className="p-3">
                  <UserGroupIcon className="h-8 w-8 text-blue-600 border-2 border-blue-600 rounded-lg p-0.5" />
                </div>
                <div>
                  <p>Team Size</p>
                  <p>1,099</p>
                </div>
              </div>
              <div className="flex">
                <div className="p-3">
                  <EyeIcon className="h-8 w-8 text-blue-600 border-2 border-blue-600 rounded-lg p-0.5" />
                </div>
                <div>
                  <p>Impressions</p>
                  <p>2,909</p>
                </div>
              </div>
              <div className="flex">
                <div className="p-3">
                  <CalendarIcon className="h-8 w-8 text-blue-600 border-2 border-blue-600 rounded-lg p-0.5" />
                </div>
                <div>
                  <p>Registeration deadline</p>
                  <p>14 Feb 23, 12:02 AM IST</p>
                </div>
              </div>
            </div>
          </div>
          {/* hackanova */}
          <div className="bg-slate-200 col-span-2 rounded-2xl p-7">
            <div>
              <p className="mb-4 font-semibold text-4xl">Hackanova</p>
              <div className=" p-3 rounded-2xl space-y-5">
                <div className="bg-slate-300 p-5 rounded-lg">
                  <p className="mb-4 font-semibold text-lg">
                    Resume Submission Round (via Unstop)
                  </p>
                  <p className="">
                    This will be a resume submission round! You will see the
                    “Submit” button here, once the round is live.
                  </p>
                  <div className="flex space-x-5 p-2">
                    <div>
                      <p className="font-semibold">Start Date</p>
                      <p>30 Jan 23, 12:00 AM IST</p>
                    </div>
                    <div>
                      <p className="font-semibold">End Date</p>
                      <p>30 Jan 23, 12:00 AM IST</p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-300 p-5 rounded-lg">
                  <p className="mb-4 font-semibold text-lg">
                    Offline Hackathon Round
                  </p>
                  <p className="">
                    The Offline Hackathon will be held at the venue
                  </p>
                  <div className="flex space-x-5 p-2">
                    <div>
                      <p className="font-semibold">Start Date</p>
                      <p>17 Feb 23, 07:30 AM IST</p>
                    </div>
                    <div>
                      <p className="font-semibold">End Date</p>
                      <p>18 Feb 23, 06:30 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* info */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-2 mx-auto">
            <div className="p-10 flex flex-col items-start">
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                All that you need to know about Hackanova
              </h2>
              <p className="leading-relaxed">
                For the first time, DJS Synapse and GDSC DJSCE are here with
                "HackNiche 2023", an offline 24-hour hackathon to get your
                creativity going. We are excited to invite all innovators and
                techno geeks to come and participate. With a great team, a
                skilled panel of judges, and a prize pool of over Rs. 1 Lakh,
                this hackathon is an ideal platform to put your knowledge to use
                and network with peers.
              </p>
            </div>
            <div className="flex flex-wrap -m-4 ">
              <div className="p-12 md:w-1/3 flex flex-col items-start">
                <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mb-4">
                  Dates
                </h2>
                <p className="leading-relaxed mb-8">
                  17th-18th February 2023 (Offline Hackathon)
                </p>
              </div>
              <div className="p-12 md:w-1/3 flex flex-col items-start">
                <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mb-4">
                  Team Size
                </h2>
                <p className="leading-relaxed mb-8">2-4 Members only</p>
              </div>
              <div className="p-12 md:w-1/3 flex flex-col items-start">
                <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mb-4">
                  Domains
                </h2>
                <p className="leading-relaxed mb-8">
                  App Development, Web Development, Machine Learning,
                  Blockchain, IoT, Cloud Computing
                </p>
              </div>
              <div className="p-12 md:w-1/3 flex flex-col items-start">
                <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mb-4">
                  Fees
                </h2>
                <p className="leading-relaxed mb-8">
                  Entire Hackathon is completely free.
                </p>
              </div>
              <div className="p-12 md:w-1/3 flex flex-col items-start">
                <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mb-4">
                  Venue
                </h2>
                <p className="leading-relaxed mb-8">
                  Dwarkadas Jivanlal Sanghvi College of Engineering, No. U, 15,
                  Bhaktivedanta Swami Rd, opp. Cooper Hospital, Navpada, JVPD
                  Scheme, Vile Parle, Mumbai, Maharashtra 400056
                </p>
              </div>
              <div className="p-12 md:w-1/3 flex flex-col items-start">
                <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mb-4">
                  Discord Server
                </h2>
                <p className="leading-relaxed mb-8">
                  https://discord.gg/NWXREUhEMh
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="px-5 py-2 mx-auto">
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

                <div className="flex mx-auto ">
                  <button className="text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-lg text-xl">
                    <NavLink to="/video">Connect to Organizers</NavLink>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*contact */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <h1 className="text-3xl mb-8">Contact The Organizers</h1>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 w-fit pr-2 md:w-1/3">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <h2 className="text-blue-900 text-2xl title-font font-medium">
                      Ayush Jain
                    </h2>
                  </div>
                  <div className="flex-grow text-lg">
                    <p className="leading-relaxed">ayushjain@gmail.com</p>
                    <p className="leading-relaxed">+91 82978 62788</p>
                  </div>
                </div>
              </div>
              <div className="p-4 w-fit pr-2 md:w-1/3">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <h2 className="text-blue-900 text-2xl title-font font-medium">
                      Kevin Haria
                    </h2>
                  </div>
                  <div className="flex-grow text-lg">
                    <p className="leading-relaxed ">kevinharia@gmail.com</p>
                    <p className="leading-relaxed ">+91 82978 62788</p>
                  </div>
                </div>
              </div>
              <div className="p-4 w-fit pr-2 md:w-1/3 ">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <h2 className="text-blue-900 text-2xl title-font font-medium">
                      Sahej Jain
                    </h2>
                  </div>
                  <div className="flex-grow text-lg">
                    <p className="leading-relaxed">sahejjain@gmail.com</p>
                    <p className="leading-relaxed">+91 82978 62788</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default About;
