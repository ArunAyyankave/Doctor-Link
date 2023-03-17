import { Route, Routes } from "react-router-dom";

import DocLayout from "../components/doctor/DocLayout";
import DOCDashboard from "../pages/doctor/DOCDashboard";
import DoctorLogin from "../pages/doctor/DoctorLogin";
import DocProfileEdit from "../components/doctor/docProfileEdit/DocProfileEdit";
import DocTimeSlots from "../components/doctor/docTimeSlots/DocTimeSlots";

import AuthenticatedRoute from "../util/doctor/AuthenticatedRoute";
import UnAuthenticatedRoute from "../util/doctor/UnAuthenticatedRoute"

function DoctorRoutes() {
    return (
        <Routes>
            <Route element={<DocLayout />}>
                <Route index element={<AuthenticatedRoute><DOCDashboard /></AuthenticatedRoute>} />
                <Route path="signin" element={<UnAuthenticatedRoute><DoctorLogin /></UnAuthenticatedRoute>} />
                <Route path="profile" element={<AuthenticatedRoute><DocProfileEdit /></AuthenticatedRoute>} />
                <Route path="slots" element={<AuthenticatedRoute><DocTimeSlots /></AuthenticatedRoute>} />
            </Route>
        </Routes>
    )
}

export default DoctorRoutes