import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";
import AllEquipment from "../pages/AllEquipment";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/all-equipment",
        element: <AllEquipment></AllEquipment>
      },
      {
        path: "*",
        element: <Error></Error>
      }
    ],
  },
  {
    path: "*",
    element: <Error></Error>
  }
]);

export default Router;
