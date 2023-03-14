import React from 'react'



function BookingSection() {
  return (
    <div className='bg-[#F3F5F9]'>
      <div className='container'>
        <div className='flex space-x-10'>
          <div className='basis-5/6 w-full my-11 space-y-6   '>
            {
              <div className='bg-white rounded-lg'>
                <div className='py-2'>

                  <a className='text-2xl font-roboto font-semibold p-2 mx-2 text-[#504a4a] '>Book an Appoinment</a>
                </div>
                <div className='flex px-4 py-5  space-x-9 '>
                  <div className='border rounded-md'>
                    <div className='p-2'>
                      <h1 className='font-semibold text-xl text-[#504a4ad0] '>12:00-12:15</h1>

                    </div>
                    <div className='pt-3'>
                      <div className='border p-1 flex justify-between items-center bg-[#F3F5F9]'>
                        {/* <div>
                          <h1 className='text-bold text-xl'>₹500</h1>
                          <p className='text-sm text-[#504a4ad0]'>/person</p>
                        </div> */}
                        <div className='pl-3'>
                          <button className='bg-green-400/70 text-white px-2 rounded'>BOOK</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='border rounded-md'>
                    <div className='p-2'>
                      <h1 className='font-semibold text-xl text-[#504a4ad0] '>12:15-12:30</h1>
                    </div>
                    <div className='pt-3'>
                      <div className='border p-1 flex justify-between items-center bg-[#F3F5F9]'>
                        {/* <div>
                          <h1 className='text-bold text-xl'>₹500</h1>
                          <p className='text-sm text-[#504a4ad0]'>person</p>
                        </div> */}
                        <div className='pl-3'>
                          <button className='bg-green-400/70 text-white px-2 rounded'>BOOK</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }


          </div>

        </div>
      </div>
    </div>
  )
}

export default BookingSection