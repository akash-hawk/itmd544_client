// router.js
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes instead of Route
import HomePage from '../pages/home';
import SigninPage from '../pages/signin';
import SignupPage from '../pages/signup';
import AllPostsPage from '../pages/allPosts';
import PostsPage from '../pages/posts';
import CommunityPage from '../pages/community';
import CommunityPostPage from '../pages/commPost';
import PostPage from '../pages/post';
import AddPostPage from '../pages/addPost';
import EditPostPage from '../pages/editPost';
import ErrorPage from '../pages/error';
import UsersPage from '../pages/users';
import PrivateRoutes from "./protected";
import AboutPage from "../pages/about";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<PrivateRoutes/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/new" element={<AddPostPage />} />
          <Route path="/post/edit/:id" element={<EditPostPage />} />
          <Route path="/posts/all" element={<AllPostsPage />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="/community/all" element={<CommunityPage />} />
          <Route path="/community/:id" element={<CommunityPostPage />} />
          <Route path="/myposts" element={<PostsPage />} />
          <Route path="/users" element={<UsersPage />} />
        </Route>

          <Route path="/about" element={<AboutPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />     
          <Route path="/:anything" element={<ErrorPage />} />  
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
