import React from "react";
import {
  BuildingOfficeIcon,
  MapPinIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

function AboutHackathon() {
  return (
    <div>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <svg
          viewBox="0 0 1097 845"
          aria-hidden="true"
          className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
        >
          <path
            fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)"
            fill-opacity=".2"
            d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
          />
          <defs>
            <linearGradient
              id="10724532-9d81-43d2-bb94-866e98dd6e42"
              x1="1097.04"
              x2="-141.165"
              y1=".22"
              y2="363.075"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#776FFF" />
              <stop offset="1" stop-color="#FF4694" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          viewBox="0 0 1097 845"
          aria-hidden="true"
          className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
        >
          <path
            fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)"
            fill-opacity=".2"
            d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
          />
          <defs>
            <linearGradient
              id="8ddc7edb-8983-4cd7-bccb-79ad21097d70"
              x1="1097.04"
              x2="-141.165"
              y1=".22"
              y2="363.075"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#776FFF" />
              <stop offset="1" stop-color="#FF4694" />
            </linearGradient>
          </defs>
        </svg>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Hackanova
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
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

      <div>
        <h1 className="font-bold text-4xl mx-3 my-5">HackNiche 2023</h1>
        <h2 className="flex">
          <BuildingOfficeIcon className="h-8 w-8" />
          {/* https://unstop.com/c/shri-vile-parle-kelavani-mandals-dwarkadas-j-sanghvi-college-of-engineering-djsce-mumbai-placement-interview-competitions-articles-videos-289 */}
          <p>
            Shri Vile Parle Kelavani Mandal's Dwarkadas J. Sanghvi College of
            Engineering (DJSCE), Mumbai
          </p>
        </h2>
        <h2 className="flex">
          <MapPinIcon className="h-8 w-8" />
          <p>
            Dwarkadas Jivanlal Sanghvi College of Engineering, Mumbai,
            Maharashtra, India
          </p>
        </h2>
        <div className="flex items-end justify-between">
          <div></div>
          <div></div>
        </div>

        <div>
          <h1 className="text-2xl font-bold">Free</h1>
          <div className="flex flex-col">
            <div className="flex bg-gray-100">
              <div className="p-3">
                <UserGroupIcon className="h-8 w-8 text-blue-600 border-2 border-blue-600 rounded-lg p-0.5" />
              </div>
              <div>
                <p>Registered</p>
                <p>1,099</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <p>Registered</p>
                <p>1,099</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1>HackNiche 2023: Stages and Timelines</h1>
          <h1>All that you need to know about HackNiche 2023</h1>
          <h2>
            For the first time, DJS Synapse and GDSC DJSCE are here with
            "HackNiche 2023", an offline 24-hour hackathon to get your
            creativity going. We are excited to invite all innovators and techno
            geeks to come and participate. With a great team, a skilled panel of
            judges, and a prize pool of over Rs. 1 Lakh, this hackathon is an
            ideal platform to put your knowledge to use and network with peers.
          </h2>
          <h2>Dates: 17th-18th February 2023 (Offline Hackathon)</h2>
          <h2>Team Size: 2-4 Members only</h2>
          <h2>
            Domains: App Development, Web Development, Machine Learning,
            Blockchain, IoT, Cloud Computing
          </h2>
          <h2>
            Eligibility Criteria: All undergraduate college students are
            eligible to participate. Inter-college and inter-year teams are
            allowed.
          </h2>
          <h2>
            Rounds: Round 1 is Resume Shortlisting and is free for all
            participants. 42 teams will be shortlisted for Round 2 Round 2 is
            the Grand Finale - the main hackathon that will be held at Dwarkadas
            Jivanlal Sanghvi College of Engineering.
          </h2>
          <h2>Fees: Entire Hackathon is completely free.</h2>
          <h2>
            Prizes: Total cash prizes worth INR 1,00,000 + goodies, internship
            opportunities Certificate of excellence for top 3 teams Certificate
            of distinction for top 6 teams Certificate of participation to all
            teams
          </h2>
          <h2>Discord Server: https://discord.gg/NWXREUhEMh</h2>
          <h2>
            Venue: Dwarkadas Jivanlal Sanghvi College of Engineering, No. U, 15,
            Bhaktivedanta Swami Rd, opp. Cooper Hospital, Navpada, JVPD Scheme,
            Vile Parle, Mumbai, Maharashtra 400056
          </h2>
          <h1>What are the important dates & deadlines?</h1>
          <h1>Contact the organisers</h1>
          <h1>Rewards and Prizes</h1>
          <h2>
            All participants will be provided a certificate of participation.
            Top 3 teams will be awarded with prize money, exciting goodies and a
            certificate of excellence.
          </h2>

          <div>
            <h1>Prizes and Goodies</h1>
            <h3>Swaggers and other Gift hampers</h3>
            <p> 1,00,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHackathon;
