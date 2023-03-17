import React from 'react'
import { useState } from 'react'
import axios from '../../../api/axios'
import { useNavigate } from 'react-router-dom'

function DocProfileEdit() {

  const [name, setName] = useState("")
  const [mobile, setMobile] = useState("")
  const [email, setEmail] = useState("")
  const [spec, setSpec] = useState("")
  const [qual, setQual] = useState("")
  const [exp, setExp] = useState("")
  const [fees, setFees] = useState("")
  const [place, setPlace] = useState("")
  const [image, setImage] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    try {

      formData.append('file', image)
      formData.append('upload_preset', 'qxxwuvkr');

      const { data } = await axios.post('https://api.cloudinary.com/v1_1/desr7slhc/image/upload', formData);
      const imageUrl = data.secure_url

      let token = localStorage.getItem('doc')
      const response = await axios.post(
        `/doctor/completeprofile`,
        JSON.stringify({ name, mobile, email, spec, qual, exp, fees, place, imageUrl }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token
          },
          withCredentials: true,
        }
      );

      navigate("/doctor");
    }
    catch (error) {

      if (!error?.response) {
        setErr("no server response");
      } else {
        setErr("failed to update");
      }
    }
  }


  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
        <div className='bg-gradient-to-r from-emerald-50 to-emerald-100 py-32 sm:px-16 lg:px-32 xl:px-20 '>
          <div className='container'>
            <div className='w-full h-45 bg-white shadow-md rounded-md p-8 space-y-6 '>
              <div className='space-y-1'>
                <h1 className='font-semibold'> <span className='text-3xl font-roboto font-bold'>Edit Profile</span></h1>
              </div>
              <form onSubmit={handleSubmit}>
                <div className='grid sm:grid-cols-3 gap-2'>
                  <input type="text " className='input_Field' placeholder='First Name' value={name} onChange={(e) => setName(e.target.value)} required />
                  <input type="number" className='input_Field' placeholder='Mobile' value={mobile} onChange={(e) => setMobile(e.target.value)} required />
                  <input type="text" className='input_Field' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <input type="text " className='input_Field' placeholder='Specialisation' value={spec} onChange={(e) => setSpec(e.target.value)} required />
                  <input type="text" className='input_Field' placeholder='Qualification' value={qual} onChange={(e) => setQual(e.target.value)} required />
                  <input type="text" className='input_Field' placeholder='Experience' value={exp} onChange={(e) => setExp(e.target.value)} required />
                  <input type="text" className='input_Field' placeholder='fees' value={fees} onChange={(e) => setFees(e.target.value)} required />
                  <input type="text" className='input_Field' placeholder='place' value={place} onChange={(e) => setPlace(e.target.value)} required />
                  <input type="file" className='input_Field' placeholder='image' onChange={(e) => setImage(e.target.files[0])} required />

                </div>
                <button type='submit' className='w-1/4  select-none p-1 rounded-full text-white  font-roboto  h-12 font-semibold bg-green-400/70 hover:bg-green-500'>Save Changes</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocProfileEdit;