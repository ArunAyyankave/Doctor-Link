import { Route, Routes } from "react-router-dom";

import DocLayout from "../components/doctor/DocLayout";
import DOCDashboard from "../pages/doctor/DOCDashboard";
import DoctorLogin from "../pages/doctor/DoctorLogin";
import DocProfileEdit from "../components/doctor/docProfileEdit/DocProfileEdit";

import AuthenticatedRoute from "../util/doctor/authenticatedRoute";
import UnAuthenticatedRoute from "../util/doctor/UnAuthenticatedRoute"

function DoctorRoutes() {
    return (
        <Routes>
            <Route element={<DocLayout />}>
                <Route index element={<AuthenticatedRoute><DOCDashboard /></AuthenticatedRoute>} />
                <Route path="signin" element={<UnAuthenticatedRoute><DoctorLogin /></UnAuthenticatedRoute>} />
                <Route path="profile" element={<AuthenticatedRoute><DocProfileEdit /></AuthenticatedRoute>} />
            </Route>
        </Routes>
    )
}

export default DoctorRoutes