import Foods from "../../Foods/Foods";
import Home from "../Home/Home";
import Main from "../Main/Main";

const { createBrowserRouter } = require("react-router-dom");

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/meals',
                element:<Foods></Foods>
            }
        ]
    }
])