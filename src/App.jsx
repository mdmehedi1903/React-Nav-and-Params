import React from 'react';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import NotFound from './pages/notfound';
import ProfilePage from './pages/ProfilePage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AppNav from './components/AppNav';

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <AppNav/>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/profile/:facebookID/:youtubeID' element={<ProfilePage/>}/>
          <Route path='/product/:id/:name' element={<ProductPage/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;