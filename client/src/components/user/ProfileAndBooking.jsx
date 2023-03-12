import React from 'react'
import doctorImage from '../../assets/doctorImage.jpg'

function ProfileAndBooking() {
  return (
    <div>
      <div className=' w-full h-screen bg-[#F3F5F9]'>
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
              <div className='shadow rounded-lg'>
                <div className='flex justify-between rounded-lg p-1'>
                  <div className='flex space-x-2'>
                    <img src={doctorImage} className="h-24 rounded-l-lg" alt="" />
                    <div className='pt-1'>
                      <h1 className='text-[#605555] text-lg uppercase'>Andrew Tie</h1>
                      <p className='text-[#605555]'><span className='text-[#807d7d]'>Activity : </span>General</p>
                      <p className='text-[#605555]'><span className='text-[#807d7d]'>Hospital : </span>Apollo </p>
                    </div>
                  </div>
                  <div>
                    <h1 className='text-[#605555] text-md uppercase'>12/08/2022</h1>
                    <p className='text-[#605555] '><span className='text-[#807d7d]'>DAY : </span>WEDNESDAY</p>
                    <p className='text-[#605555]'><span className='text-[#807d7d]'>TIME : </span>05:45am - 06:00am </p>
                  </div>
                  <div className='mr-3'>
                    <p className='text-[#605555] text-end'><span className='text-[#807d7d]'>RS : </span>₹500</p>
                    <p className='text-white bg-red-500 hover:bg-red-600 text-center rounded-full cursor-pointer'>cancel</p>
                  </div>
                </div>
              </div>
              <div className='shadow rounded-lg'>
                <div className='flex justify-between rounded-lg p-1'>
                  <div className='flex space-x-2'>
                    <img src={doctorImage} className="h-24 rounded-l-lg" alt="" />
                    <div className='pt-1'>
                      <h1 className='text-[#605555] text-lg uppercase'>Andrew Tie</h1>
                      <p className='text-[#605555]'><span className='text-[#807d7d]'>Activity : </span>General</p>
                      <p className='text-[#605555]'><span className='text-[#807d7d]'>Hospital : </span>Apollo </p>
                    </div>
                  </div>
                  <div>
                    <h1 className='text-[#605555] text-md uppercase'>12/08/2022</h1>
                    <p className='text-[#605555] '><span className='text-[#807d7d]'>DAY : </span>WEDNESDAY</p>
                    <p className='text-[#605555]'><span className='text-[#807d7d]'>TIME : </span>05:45am - 06:00am </p>
                  </div>
                  <div className='mr-3'>
                    <p className='text-[#605555] text-end'><span className='text-[#807d7d]'>RS : </span>₹500</p>
                    <div class="flex items-center ">
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className='shadow rounded-lg'>
                <div className='flex justify-between rounded-lg p-1'>
                  <div className='flex space-x-2'>
                    <img src={doctorImage} className="h-24 rounded-l-lg" alt="" />
                    <div className='pt-1'>
                      <h1 className='text-[#605555] text-lg uppercase'>Andrew Tie</h1>
                      <p className='text-[#605555]'><span className='text-[#807d7d]'>Activity : </span>General</p>
                      <p className='text-[#605555]'><span className='text-[#807d7d]'>Hospital : </span>Apollo </p>
                    </div>
                  </div>
                  <div>
                    <h1 className='text-[#605555] text-md uppercase'>12/08/2022</h1>
                    <p className='text-[#605555] '><span className='text-[#807d7d]'>DAY : </span>WEDNESDAY</p>
                    <p className='text-[#605555]'><span className='text-[#807d7d]'>TIME : </span>05:45am - 06:00am </p>
                  </div>
                  <div className='mr-3'>
                    <p className='text-[#605555] text-end'><span className='text-[#807d7d]'>RS : </span>₹500</p>
                    <div class="flex items-center ">
                      <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileAndBooking
