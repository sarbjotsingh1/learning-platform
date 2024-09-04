import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddCourse from "./pages/AddCourse";
import { UserDashboard } from "./pages/UserDashboard";
import { Course } from "./pages/Course";
import Navbar from "./Componets/Navbar";
import { Home } from "./pages/Home";
import { AdminDashboard } from "./pages/AdminDashBoard";
import { useState } from "react";
import UpdateCourse from "./pages/UpdateCourse";
import Quiz from "./pages/quiz";
import ProtectedUserLogin from "./ProtectedRoute/ProtectedLogin";
import ProtectedAdminLogin from "./ProtectedRoute/ProtectedAdmin";
import Contactus from "./pages/ContactUs";

function App() {
  const [loggedIn, setLoggedin] = useState(false);
  const [adminloggedIn, setAdminLoggedin] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Navbar loggedin={loggedIn} setLoggedin={setLoggedin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <Login
                setLoggedin={setLoggedin}
                setAdminLoggedin={setAdminLoggedin}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/admin/addcourse" element={<AddCourse />} />
          <Route
            path="/user"
            element={
              <ProtectedUserLogin>
                <UserDashboard />
              </ProtectedUserLogin>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedAdminLogin>
                <AdminDashboard />
              </ProtectedAdminLogin>
            }
          />
          <Route path="/user/course/:courseid" element={<Course />} />
          <Route path="/admin/course/:courseid" element={<UpdateCourse />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
