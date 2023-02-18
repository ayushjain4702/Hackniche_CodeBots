import React from "react";
import { NavLink } from "react-router-dom";

function TeamDetail() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-12 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Team Details
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Skill Score of each team registered in the Hackathon
            </p>
          </div>
          <div class="flex flex-wrap justify-between px-20">
            <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                CodeBots
              </h2>
              <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <a>
                  <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Ayush Jain : 4
                </a>
                <a>
                  <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Aditya Rakshe : 4
                </a>
                <a>
                  <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Kevin Haria : 4
                </a>
                <a>
                  <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Sahej Jain : 8
                </a>
              </nav>
              <h2 class="mt-5 font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                Total : 20
              </h2>
            </div>
            <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                Sleep Deprived
              </h2>
              <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <a>
                  <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Rudra Trivedi : 9
                </a>
                <a>
                  <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Arya Shah : 8
                </a>
                <a>
                  <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Greha Shah : 6
                </a>
                <a>
                  <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Kunal Joshi : 7
                </a>
              </nav>
              <h2 class="mt-5 font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                Total : 30
              </h2>
            </div>
            <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                MangoDb
              </h2>
              <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <a>
                  <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Jay Patel : 7
                </a>
                <a>
                  <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Krish Shah : 9
                </a>
                <a>
                  <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Yogesh Jha : 5
                </a>
                <a>
                  <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Dhruv Jain : 8
                </a>
              </nav>
              <h2 class="mt-5 font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                Total : 29
              </h2>
            </div>
            <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                Enemies of Syntaxx
              </h2>
              <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <a>
                  <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Yash Joshi : 8
                </a>
                <a>
                  <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Bhavik Shah : 8
                </a>
                <a>
                  <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Shrey Parekh : 8
                </a>
                <a>
                  <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Dishant Zaveri : 9
                </a>
              </nav>
              <h2 class="mt-5 font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                Total : 33
              </h2>
            </div>
          </div>
          <NavLink to="/about">
            <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Go Back
            </button>
          </NavLink>
        </div>
      </section>
    </div>
  );
}

export default TeamDetail;
