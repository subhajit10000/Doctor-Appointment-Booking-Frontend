import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./index.css";
import { AuthProvider } from "./context/Auth";
import { Layout, Protected } from "./components/Layout";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import DoctorDetail from "./pages/DoctorDetail";
import Checkout from "./pages/Checkout";
import AppointmentDetail from "./pages/AppointmentDetail";
import MyAppointments from "./pages/MyAppointments";
import Profile from "./pages/Profile";
import { Login, Register, Forgot } from "./pages/Auth";
import Admin from "./pages/Admin";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctors/:id" element={<DoctorDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<Forgot />} />
            <Route path="/checkout/:id" element={<Protected><Checkout /></Protected>} />
            <Route path="/appointments" element={<Protected><MyAppointments /></Protected>} />
            <Route path="/appointments/:id" element={<Protected><AppointmentDetail /></Protected>} />
            <Route path="/profile" element={<Protected><Profile /></Protected>} />
            <Route path="/admin" element={<Protected admin><Admin /></Protected>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
