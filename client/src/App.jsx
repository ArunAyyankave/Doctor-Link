import { Routes, Route } from "react-router-dom";

//user imports
import Signin from "./pages/user/Signin";
import Signup from "./pages/user/Signup";
import DoctorsPage from "./pages/user/DoctorsPage";
import DoctorDetails from "./pages/user/DoctorDetails";
import Profile from "./pages/user/Profile";
import DoctorSignup from "./pages/user/DoctorSignup";
import ForgotPwd from "./pages/user/ForgotPwd";

//doctor imports
import DoctorLogin from "./pages/doctor/DoctorLogin";
import DOCLayout from "./components/doctor/DocLayout.jsx"
import DOCDashboard from "./pages/doctor/DOCDashboard"
import DOCProfileEdit from "./components/doctor/docProfileEdit/DocProfileEdit"

//admin imports
import AdminLogin from "./pages/admin/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";
import UsersManage from "./pages/admin/UserManage";

import DoctorManage from "./pages/admin/DoctorManage";

//layout 
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* user */}
        {/* public routes */}
        <Route path="" element={<DoctorsPage />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="doctorDetails" element={<DoctorDetails />} />
        <Route path="doctorSignup" element={<DoctorSignup />} />
        <Route path="forgotPwd" element={<ForgotPwd />} />

        {/*to be protected*/}
        <Route element={<RequireAuth />}>
          <Route path="appointments" element={<Profile />} />
        </Route>
      </Route>


      {/* Doctor */}
      <Route path="/doctor/signin" element={<DoctorLogin />} />

      <Route element={<DOCLayout/>}>
            <Route path="doctor" element={<DOCDashboard />} />
            <Route path="/doc/profile" element={<DOCProfileEdit />} />
            {/* <Route path="signin" element={<DOCLogin />} /> */}
    
        </Route>
      


      {/* admin */}
      <Route path="/admin/signin" element={<AdminLogin />} />
      <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/users" element={<UsersManage />} />

      <Route path="/admin/doctors" element={<DoctorManage />} />
    </Routes>
  );
}

export default App;
