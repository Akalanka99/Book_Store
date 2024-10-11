
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  import App from "../App";
  import Home from "../home/Home";
  import Shop from "../shop/Shop";
  import About from "../components/About";
  import Blog from "../components/Blog";
  import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBook from "../dashboard/ManageBook";
import EditBooks from "../dashboard/EditBooks";
import Signup from "../components/signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Login from "../components/Login";



  const router = createBrowserRouter([
    {
      path: "/",
      element:<App/>,
      children: [
        {
        path:"/",
        element:<Home/>
        },
        {
          path:"/shop",
          element:<Shop/>
        },
        {
          path:"/about",
          element:<About/> 
        },
        {
          path:"/blog",
          element:<Blog/>
        },
        {
          path:"/book/:id",
          element:<SingleBook/>,
          loader:({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        },

      ]
    },
    {
      path:"/admin/dashboard",
      element:<DashboardLayout/>,
      children: [
        {
          path:"/admin/dashboard",
          element:<PrivateRoute><Dashboard/></PrivateRoute>
        },
        {
          path:"/admin/dashboard/upload",
          element:<UploadBook/>
        },
        {
          path:"/admin/dashboard/manage",
          element:<ManageBook/>
        },
        {
          path:"/admin/dashboard/edit-book/:id",
          element:<EditBooks/>,
          loader:({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        }

      ]
    },
    {
      path:"/signup",
      element:<Signup/>
    },
    {
      path:"/login",
      element:<Login/>
    }
  ]);

  export default router;