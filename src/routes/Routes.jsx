import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import Root from "../layouts/Root";
import Register from "../pages/register/Register";
import Profile from "../pages/profile/Profile";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
          path: '/profile',
          element: <Profile></Profile>
        }
      ]
    },
  ]);