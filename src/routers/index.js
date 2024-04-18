// router.js
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes instead of Route
import HomePage from '../pages/home';
import SigninPage from '../pages/signin';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
