import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ChangePassword from "./pages/ChangePassword";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Regisratin = lazy(() => import("./pages/Regisratin"));
const PersonalOffice = lazy(() => import("./pages/PersonalOffice"));
const Admin = lazy(() => import("./pages/Admin"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Regisratin />} />
        <Route path="/entrance" element={<PersonalOffice />} />
        <Route path="/about" element={<About />} />
        <Route path="/adminspanel" element={<Admin />} />{" "}
        <Route path="/resetpassword" element={<ChangePassword />} />
      </Routes>
    </Suspense>
  );
};

export default App;
