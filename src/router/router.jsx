import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/client/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Admin from "../pages/admin/admin";
import Position from "../pages/admin/position";
import Users from "../pages/admin/Users";
import Employee from "../pages/admin/Employee";
import Rules from "../pages/admin/Rules";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/admin",
        element: <Admin />,
        children: [
            {
                path: "positions",
                element: <Position />,
            },
            {
                path: "users",
                element: <Users />
            },
            {
                path: "employee",
                element: <Employee />
            },
            {
                path: "rules",
                element: <Rules />
            }
        ],
    },
]);