import React, { useEffect, useState } from "react";
import signup from "../../assets/signup.png";
import axios from "axios";

const Book = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setselectedCountry] = useState("nil");
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("nil");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("nil");
  const [weight, setWeight] = useState(0);

  useEffect(() => {
    const fetchCountries = () => {
      const countriesRequest = {
        method: "GET",
        url: "http://34.30.253.65:7002/api/Utility/GetCountries",
        headers: {
          "Content-type": "application/json",
        },
      };
      axios
        .request(countriesRequest)
        .then((response) => {
          setCountries(response.data.data);
        })
        .catch((e) => console.log(e));
    };
    fetchCountries();
  }, []);

  const fetchState = (value) => {
    const statesRequest = {
      method: "GET",
      url: `http://34.30.253.65:7002/api/Utility/GetStates?CountryId=${value}`,
      headers: {
        "Content-type": "application/json",
      },
    };
    axios
      .request(statesRequest)
      .then((response) => {
        setStates(response.data.data);
      })
      .catch((e) => console.log(e));
  };

  const fetchCity = (stateID) => {
    const statesRequest = {
      method: "GET",
      url: `http://34.30.253.65:7002/api/Utility/GetCity?StateId=${stateID}`,
      headers: {
        "Content-type": "application/json",
      },
    };
    axios
      .request(statesRequest)
      .then((response) => {
        setCities(response.data.data);
      })
      .catch((e) => console.log(e));
  };

  const getAmount = (e) => {
    const data = {
      weight: Number(weight),
      width: 0,
      stateId: Number(selectedState),
      dexStateId: 4,
      cityId: Number(selectedCity),
      dexCityId: 83,
    };
    e.preventDefault();
    const amountRequest = {
      method: "POST",
      url: "http://34.30.253.65:7002/api/Utility/GetShippingCost",
      headers: {
        "Content-type": "application/json",
        Accept: "text/plain",
      },
      data: data,
    };
    axios
      .request(amountRequest)
      .then((response) => {
        alert(`The amount is ${response.data.data}`);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="bg-[#1d0803] w-full h-full top-0">
      <div className="flex items-center justify-center">
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
              <select
                id="country"
                class="bg-transparent border border-gray-300 text-white text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                value={selectedCountry}
                onChange={(e) => {
                  setselectedCountry(e.target.value);
                  fetchState(e.target.value);
                }}
              >
                <option selected value="nil">
                  Choose a Country
                </option>
                {countries.map((country) => (
                  <option value={country.countryId}>{country.name}</option>
                ))}
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
                  id="state"
                  class="bg-transparent border border-gray-300 text-white text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                  value={selectedState}
                  onChange={(e) => {
                    setSelectedState(e.target.value);
                    fetchCity(e.target.value);
                  }}
                >
                  <option selected value="nil">
                    Choose a State
                  </option>
                  {states.map((state) => (
                    <option value={state.id}>{state.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="w-full ">
                <label for="underline_select" class="sr-only"></label>
                <select
                  id="city_select"
                  class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-yellow-500"
                  value={selectedCity}
                  onChange={(e) => {
                    setSelectedCity(e.target.value);
                  }}
                >
                  <option selected>Choose a City</option>
                  {cities.map((city) => (
                    <option value={city.cityId}>{city.name}</option>
                  ))}
                </select>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="number"
                  name="weight"
                  id="weight"
                  class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
                  placeholder=""
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  required
                />
                <label
                  for="weight"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Weight (kg)
                </label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 mt-3 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={(e) => getAmount(e)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Book;
