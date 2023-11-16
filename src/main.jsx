import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import User from "./Components/User/User";
import Github, { githubinfo } from "./Components/Github/Github";


// 1st way:

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children:[
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }
// ])

//2nd Way:
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="user/:id" element={<User />} />
    <Route 
    path="github" 
    element={<Github />}
    loader={githubinfo}  //loader is used in such cases that we can directly load or call an api request or any data we want to fetch like from backend while routing , at that time we pass it in loader fun or like we can also directly call it here. It is faster then using UseEffect.Also we have to use the hook UseLoader here in our caase in Github.jsx file
    />

  </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* routerProvider is a self closed tag , and it will take a prop to work, it will not work unless it will take prop */}

    {/* so it will take router as a prop and we will provide router init, for that we have to create router and it will be in two ways , depending on you its easy or hard */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
