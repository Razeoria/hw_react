import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainNavigation from '../MainNavigation/MainNavigation';
import Homepage from '../../pages/Homepage/Homepage';
import PostsOverview from '../../pages/AllPostsPage/AllPostsPage';
import SinglePostPage from '../../pages/SinglePostPage/SinglePostPage';

import './App.css';
import '../../styles/reset.css';
import '../../styles/common.css';

function App() {
  return (
    <>
      <MainNavigation />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/posts' element={<PostsOverview />} />
        <Route path='/posts/:id' element={<SinglePostPage />} />
      </Routes>
    </>
  );
}

export default App;
