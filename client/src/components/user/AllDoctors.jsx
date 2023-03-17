import React, { useState } from "react";
import { ShareIcon } from "../../assets/ShareIcon";
import banner from "../../assets/banner.png";

import axios from "../../api/axios";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'


function AllDocotors(props) {

  const [doc, setDocs] = useState([])

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/getDoctors').then(({ data }) => {
      setDocs(data.docDatas);
      props.onSearchData(data.docDatas);
    });
  }, [])

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto pt-28">
        <div className="w-full h-96 bg-red-400 bg-cover bg-no-repeat rounded-xl" style={{ backgroundImage: `url(${banner})` }}>
          <h1 className="mx-4 pt-24 pb-3 font-serif text-4xl">Book an appointment for an in-clinic</h1>
          <span className="mx-4 font-serif text-4xl">consultation</span>
          <span className="mx-4 mt-5 font-serif text-xl flex justify-start">Find experienced doctors across all specialties</span>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 place-items-center 2xl:grid-cols-4 py-24 ">

          {props.results.map((d) => (
              <div className="w-full p-4 lg:w-72 2xl:w-80 rounded-lg shadow-xl mt-20 scale-100 hover:scale-105 ease-in duration-200 bg-white" onClick={()=>navigate(`/doctorDetails/${d._id}`)}>
                <div className="wrapper antialiased -mt-16">
                  <img
                    src={d.imageUrl}
                    alt=""
                    className="h-44 w-full object-cover rounded-lg shadow-md "
                  />
                </div>
                <div className="flex justify-between mt-3">
                  <span className="bg-teal-200 text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide">
                    {d.specialisation}
                  </span>
                  <ShareIcon />
                </div>
                <h4 className="mt-1 text-md md:text-xl font-semibold uppercase leading-tight truncate">
                  {d.name}
                </h4>
                <div className="sm:mt-1">{d.place}</div>
                <div className=" sm:mt-0 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div>
                    <p className="mt-3 hidden sm:block text-[#4f4c4a]">Rating</p>
                    <div class="flex items-center ">
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>First star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Second star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Third star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Fourth star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-gray-300 dark:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Fifth star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="-mt-2 sm:-mt-0 flex flex-row sm:flex-col items-end ">
                    <h2 className="font-semibold sm:font-bold mt-3 text-start sm:text-end">
                      ₹{d.fees}
                    </h2>
                    <p className="text-[#4f4c4a] ml-1">per appoinment</p>
                  </div>
                </div>

              </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default AllDocotors;
