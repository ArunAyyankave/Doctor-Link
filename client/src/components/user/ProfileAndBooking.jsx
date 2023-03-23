import React, { useEffect, useState } from 'react'
import axios from "../../api/axios";

function ProfileAndBooking() {

  const [aps, setAps] = useState([]);

  const token = localStorage.getItem('user')
  useEffect(() => {
    const getAps = async () => {
      try {
        const { data } = await axios.get(`/appointments`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token
          },
          withCredentials: true,
        });
        setAps(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getAps();
  }, [])

  return (
    <div>
      <div className=' w-full bg-[#F3F5F9]'>
        <div className='container'>
          <div className='flex py-24 max-h-full space-x-2'>
            <div className='bg-white shadow-sm w-full  basis-1/4 p-4 space-y-3 rounded-md sticky' >
              <div>
                <h1 className='font-semibold text-2xl font-roboto text-[#605555] uppercase'>Arun D</h1>
                <p className='text-[#807d7d] font-mono font-semibold'>8547429699</p>
              </div>
              <div className='buttons flex flex-col space-y-2 '>
                <button className='border-r-4 text-lg p-3 text-[#807d7d] focus:border-green-400 focus:text-[#605555] hover:text-[#605555] text-start'>MY APPOINTMENTS</button>
                {/* <button className='border-r-4 text-lg p-3 text-[#807d7d] focus:border-green-400 focus:text-[#605555] hover:text-[#605555] text-start'>EDIT PROFILE</button> */}
              </div>
            </div>
            <div className='bg-white basis-3/4 p-4 space-y-5 '>
              <h1 className='font-semibold text-2xl font-roboto text-green-700 '>Appointments</h1>
              {aps && aps.map(ap => (
                <div className='shadow rounded-lg' key={ap._id}>
                  <div className='flex flex-col md:flex-row justify-between rounded-lg p-1'>
                    <div className='flex space-x-2'>
                      <img src={ap.doctor.imageUrl} className="h-24 rounded-l-lg" alt="" />
                      <div className='pt-1'>
                        <h1 className='text-[#605555] text-lg uppercase'>{ap.doctor.name}</h1>
                        <p className='text-[#605555]'><span className='text-[#807d7d]'>Specialisation : </span>{ap.doctor.specialisation}</p>
                        <p className='text-[#605555]'><span className='text-[#807d7d]'>Place : </span>{ap.doctor.place}</p>
                      </div>
                    </div>
                    <div className="md:flex-grow md:pl-4">
                      <h1 className='text-[#605555] text-md uppercase'>{new Date(ap.timeSlot[0].start).toLocaleDateString([], { month: 'long', day: '2-digit' })}
                      </h1>
                      <p className='text-[#605555] '><span className='text-[#807d7d]'></span>{new Date(ap.timeSlot[0].start).toLocaleDateString([], { weekday: 'long' })}
                      </p>
                      <p className='text-[#605555]'><span className='text-[#807d7d]'></span>{new Date(ap.timeSlot[0].start).toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' })} - {new Date(ap.timeSlot[0].end).toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' })}</p>
                    </div>
                    <div className='md:mr-3'>
                      <p className='text-[#605555] text-end'><span className='text-[#807d7d]'>RS : </span>₹{ap.doctor.fees}</p>
                      {/* <p className='text-white bg-red-500 hover:bg-red-600 text-center rounded-full cursor-pointer'>cancel</p> */}
                    </div>
                  </div>
                </div>

              ))}

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileAndBooking
