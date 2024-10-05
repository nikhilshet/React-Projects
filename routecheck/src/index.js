import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Contact from './components/Contact';
import Shop from './components/Shop';
import About from './components/About';
import Home from './components/Home';
import User from './components/User';
import Github, { loader } from './components/Github';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='user/:userID' element={<User/>}/>
      <Route loader={loader} path='github' element={<Github/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider 
      router={router}/>
  </React.StrictMode>
);


