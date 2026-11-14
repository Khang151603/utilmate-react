import { createBrowserRouter } from "react-router";
import App from "../App";
import { Home } from "../pages/home";
import ReactJsx from "../pages/fundamental/react-jsx";
import ReactProps from "../pages/fundamental/react-props";
import ReactState from "../pages/fundamental/react-state";
import User from "../pages/fundamental/user";
import UserDetail from "../pages/fundamental/user-detail";
import QuestionBoard from "../pages/sample-app/question-board/question-board";

export const router = createBrowserRouter([
  {
    path: '/',
    // Component: App
    element: <App />,
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
        path: 'users',
        element: <User />
      },
      {
        path: 'users/:userId',
        element: <UserDetail />
      },
    ]
  },
  {
    path: 'question-board',
    element: <QuestionBoard />
  },
  {
    path: 'login',
    element: <div>login</div>
  }
])