// router.js
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes instead of Route
import HomePage from '../pages/home';
import SigninPage from '../pages/signin';
import SignupPage from '../pages/signup';
import AllPostsPage from '../pages/allPosts';
import PostsPage from '../pages/posts';
import PostPage from '../pages/post';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/posts/all" element={<AllPostsPage />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/posts" element={<PostsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
