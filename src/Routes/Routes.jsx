import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../layout/Dashboard";
import MySelectedClass from "../pages/Dashboard/MySelectedClass/MySelectedClass";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageClass from "../pages/Dashboard/ManageClass/ManageClass";
import Payment from "../pages/Dashboard/Payment/Payment";
import InstructorRoute from "./InstructorRoute";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import MyEnrollClass from "../pages/Dashboard/MyEnrollClass/MyEnrollClass";
import MyPaymentHistory from "../pages/Dashboard/MyPaymentHistory/MyPaymentHistory";
import NotFound from "../pages/NotFound/NotFound";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
          path: 'instructors',
          element: <Instructors />
        },
        {
          path: 'classes',
          element: <Classes />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'signup',
          element: <SignUp />
        },
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard /></PrivateRoute>,
      children: [
        {
          path: 'myselectedclass',
          element: <MySelectedClass />
        },
        {
          path: 'payment',
          element: <Payment />
        },
        {
          path: 'myenrollclass',
          element: <MyEnrollClass />
        },
        {
          path: 'mypaymenthistory',
          element: <MyPaymentHistory />
        },
        {
          path: 'allusers',
          element: <AdminRoute><AllUsers /></AdminRoute>
        },
        {
          path: 'additem',
          element: <InstructorRoute><AddItem /></InstructorRoute>
        },
        {
          path: 'myclasses',
          element: <InstructorRoute><MyClasses /></InstructorRoute>
        },
        {
          path: 'manageclass',
          element: <AdminRoute><ManageClass /></AdminRoute>
        },
      ]
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]);