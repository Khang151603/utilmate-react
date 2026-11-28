import { createBrowserRouter } from "react-router";
import App from "../App";
import { Home } from "../pages/home";
import ReactJsx from "../pages/fundamental/react-jsx";
import ReactProps from "../pages/fundamental/react-props";
import ReactState from "../pages/fundamental/react-state";
import User from "../pages/fundamental/user";
import UserDetail from "../pages/fundamental/user-detail";
import { ColorBox } from "../pages/sample-app/color-box";
import JobBoard from "../pages/sample-app/job-board";
import { Login } from "../pages/login";
import AuthRoute from "./auth-route";
import GuestRoute from "./guest-route";
import { ContactUs } from "../pages/contact-us";
import UseEffect from "../pages/fundamental/use-effect";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    // element: <AuthRoute><App /></AuthRoute>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'react-jsx',
        element: <ReactJsx />
      },
      {
        path: 'react-props',
        element: <ReactProps />
      },
      {
        path: 'react-state',
        element: <ReactState />
      },
      {
        path: 'color-box',
        element: <ColorBox />
      },
      {
        path: 'job-board',
        element: <JobBoard />
      },
      {
        path: 'users',
        element: <User />
      },
      {
        path: 'users/:userId',
        element: <UserDetail />
      },
      {
        path: 'use-effect',
        element: <UseEffect />
      },
    ]
  },
  {
    path: 'login',
    element: <GuestRoute><Login /></GuestRoute>
  },
  {
    path: 'contact-us',
    element: <ContactUs />
  }
])