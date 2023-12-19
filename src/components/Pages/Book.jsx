import React from "react";
import { useForm } from "react-hook-form";
import { Select, Option } from "@material-tailwind/react";
import signup from "../../assets/signup.png";


const Book = () => {
  return (
    <div className="bg-[#1d0803] w-full h-full top-0">
      <div className="flex items-center justify-center justify-around">
        <div>
          <img src={signup} alt="" />
        </div>

        <form class="max-w-md mx-auto">
          <div className="grid md:grid-cols-2 md:gap-8">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="sender_name"
                id="sender_name"
                class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-yellow-500 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
                placeholder=" "
                required
              />
              <label
                for="sender_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-500 peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Sender name
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="tel"
                name="sender_number"
                id="sender_number"
                class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-yellow-500 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
                placeholder=" "
                required
              />
              <label
                for="sender_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-yellow-500 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Sender number
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-8">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="receiver_name"
                id="receiver_name"
                class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
                placeholder=" "
                required
              />
              <label
                for="receiver_number"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Receiver name
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="receiver_number"
                id="receiver_number"
                class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
                placeholder=" "
                required
              />
              <label
                for="receiver_number"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Receiver number
              </label>
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="address"
                id="address"
                class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
                placeholder=" "
                required
              />
              <label
                for="address"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Destination address
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="sender_email"
                id="sender_email"
                class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
                placeholder=" "
                required
              />
              <label
                for="email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-8 items-center">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="zip_code"
                id="zip_code"
                class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
                placeholder=" "
                required
              />
              <label
                for="address"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Zip code
              </label>
            </div>
            <div className="">
              <label
                for="city"
                class="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                
              </label>
              <select
                id="city"
                class="bg-transparent border border-gray-300 text-white text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
              >
                <option selected>Choose a State</option>
                <option value={4}>Enugu</option>
                <option value="EN">Enugu</option>
                <option value="AS">Asaba</option>
              </select>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="">
                <label
                  for="city"
                  class="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Select city
                </label>
                <select
                  id="city"
                  class="bg-transparent border border-gray-300 text-white text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                >
                  <option selected>Choose a country</option>
                  <option value="ON">Onitsha</option>
                  <option value="AB">Aba</option>
                  <option value="EN">Enugu</option>
                  <option value="AS">Asaba</option>
                </select>
              </div>
              <div className="">
                <label for="underline_select" class="sr-only"></label>
                <select
                  id="city_select"
                  class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-yellow-500"
                >
                  <option selected>City</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Book;
