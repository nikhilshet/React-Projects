import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, RouterProvider , createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home';
import About from './components/Aboutus';
import Contact from './components/Contact';
import User from './components/User';
import Github, { loaderFunction } from './components/Github';

// const router = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element : <Layout/>,
//       children : [
//         {
//           path : "",
//           element : <Home/>
//         },
//         {
//           path : "about",
//           element : <About/>
//         },
//         {
//           path: "contact",
//           element : <Contact/>
//         }

//       ]
//     }
//   ]
// )

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:id' element={<User/>}/>
      <Route loader={loaderFunction} path='github' element={<Github/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 <React.StrictMode>
    
    <RouterProvider
      router= {router} 
      />
    
  </React.StrictMode>

);

