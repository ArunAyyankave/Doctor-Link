import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "../../api/axios";

function BookingSection() {

  const [doc, setDoc] = useState({});
  const { id } = useParams();

  useEffect(()=>{
    const getDoc = async () => {
      try {
        let { data } = await axios.get(`/doctor/${id}`);
        setDoc(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getDoc();
  }, [])
  
  return (
    <div className='bg-[#F3F5F9]'>
      <div className='container'>
        <div className='flex space-x-10'>
          <div className='w-full my-11 space-y-6'>
              <div className='bg-white rounded-lg'>
                <div className='py-2'>
                  <a className='text-2xl font-roboto font-semibold p-2 mx-2 text-[#504a4a] '>Book an Appoinment</a>
                </div>
                <div className='flex px-4 py-5  space-x-9 '>
                {doc && doc.timeSlots && doc.timeSlots.map(slot => (
                  <div className='border rounded-md' key={slot._id}>
                    <div className='p-2'>
                      <h1 className='font-semibold text-xl text-[#504a4ad0] '>{new Date(slot.start).toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' })}-{new Date(slot.end).toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' })}</h1>
                    </div>
                    <div className='pt-3'>
                      <div className='border p-1 flex justify-between items-center bg-[#F3F5F9]'>
                        <div>
                          <h1 className='text-bold text-xl'>{new Date().toLocaleDateString('en-US', { day: 'numeric' })}</h1>
                          <p className='text-sm text-[#504a4ad0]'>{new Date(slot.start).toLocaleString('en-US', { month: 'short' })}</p>
                        </div>
                        <div className='pl-3'>
                          <button className='bg-green-400/70 text-white px-2 rounded'>BOOK</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))}
                  {/* <div className='border rounded-md'>
                    <div className='p-2'>
                      <h1 className='font-semibold text-xl text-[#504a4ad0] '>12:15-12:30</h1>
                    </div>
                    <div className='pt-3'>
                      <div className='border p-1 flex justify-between items-center bg-[#F3F5F9]'>
                        <div>
                          <h1 className='text-bold text-xl'>₹500</h1>
                          <p className='text-sm text-[#504a4ad0]'>person</p>
                        </div>
                        <div className='pl-3'>
                          <button className='bg-green-400/70 text-white px-2 rounded'>BOOK</button>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingSection