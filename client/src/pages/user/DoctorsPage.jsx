import React from 'react'
import UserNavbar from '../../components/user/UserNavbar'
import AllDocotors from '../../components/user/AllDoctors'
import UserFooter from '../../components/user/UserFooter'

function DoctorsPage() {
  return (
    <div>
      <UserNavbar />
      <AllDocotors />
      <UserFooter />
    </div>
  )
}

export default DoctorsPage;
