import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Signin from "../pages/user/Signin";
import Signup from "../pages/user/Signup";
import DoctorsPage from "../pages/user/DoctorsPage";
import DoctorDetails from "../pages/user/DoctorDetails";
import Profile from "../pages/user/Profile";
import ForgotPwd from "../pages/user/ForgotPwd";
import DoctorSignup from "../pages/user/DoctorSignup";

import AuthenticatedRoute from "../util/authenticatedRoute";
import UnAuthenticatedRoute from "../util/unAuthenticatedRoute";

function UserRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<DoctorsPage />} />
        <Route path="signin" element={<UnAuthenticatedRoute><Signin /></UnAuthenticatedRoute>} />
        <Route path="signup" element={<Signup />} />
        <Route path="doctorDetails" element={<DoctorDetails />} />
        <Route path="forgotPwd" element={<ForgotPwd />} />
        <Route path="doctorSignup" element={<DoctorSignup />} />
        <Route path="appointments" element={<AuthenticatedRoute><Profile /></AuthenticatedRoute>} />
      </Route>
    </Routes>
  )
}

export default UserRoutes