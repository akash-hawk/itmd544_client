// router.js
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes instead of Route
import HomePage from '../pages/home';
import SigninPage from '../pages/signin';
import SignupPage from '../pages/signup';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
