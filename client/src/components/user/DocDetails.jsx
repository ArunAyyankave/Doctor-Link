import React from 'react'
import doctorImage from '../../assets/doctorImage.jpg'
import { ShareIcon } from '../../assets/ShareIcon'
import { LocationIcon, } from '../../assets/LocationIcon'


function SingleVenuejsx() {
  return (
    <div>
      <div className='bg-white '>
        <div className='container '>
          <div className='flex flex-col md:flex-row w-full mt-32 '>
            <div className='basis-2/5'>
              <div>
                <img src={doctorImage} alt="" className='h-80 w-full object-full rounded-xl shadow-md ' />
              </div>
            </div>
            <div className='basis-3/5 container my-2 space-y-16'>
              <div className='flex justify-between'>
                <h1 className='font-bold text-2xl text-roboto'>Dr. Francis Jacob</h1>
                <div className='text-xl mt-1'>
                  <div className='bg-blue-500 flex items-center px-3 rounded-md shadow-lg'>
                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <p className='ml-2   text-base text-white'>4</p>
                  </div>
                  <div className='float-right mt-3'>
                    <ShareIcon />
                  </div>
                </div>
              </div>
              <div className='flex justify-between'>
                <div className='flex items-start'>
                  <div className='text-xl mt-1 text-cyan-500'>
                    <LocationIcon />
                  </div>
                  <div className='text-slate-500 ml-1 text-base'>
                    <p>Apollo hospital,near HiLite Mall</p>
                    <p>Palazhi</p>
                    <p>Kozhikode,Kerala</p>
                  </div>
                </div>

              </div>
              <div className='flex justify-between'>
                <div>
                  <div className='flex text-4xl text-[#4f4141e2] space-x-6'>
                    Neurologist
                  </div>
                </div>
                <div className='border-white rounded-md border-dotted p-1 border-2'>
                  <div className='flex items-center space-x-1'>
                    <div className='text-2xl text-white'>

                    </div>
                    <h1 className='text-xl'>₹500 Per Appoinment</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-2/5'>
            <div className='flex space-x-28 pt-12 justify-center '>
              <div className='text-cyan-500 cursor-pointer '>
                <h1 className=''>BOOK A SLOT</h1>
                <hr className='mt-3 border-2 border-cyan-500 rounded-t-lg' />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleVenuejsx