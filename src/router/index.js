import Login from "../Pages/Login";
import Start from "../Pages/Start";
import Authorized from "../Pages/Authorized";

//  const router = [
//     {path: "/", component: <Start/>, exact: true},
//     {path: "/login", component: <Login/>, exact: true},
//     {path: "*", component: <Error/>, exact: true}
// ]
export const publicRouter = [
    {path: "/", component: <Start/>, exact: true},
    {path: "/login", component: <Login/>, exact: true},
    {path: "*", component: <Login/>, exact: true}
]
export const privatRouter = [
    {path: "/authorized", component: <Authorized/>, exact: true},
    {path: "/", component: <Start/>, exact: true},
    {path: "*", component: <Authorized/>, exact: true}
]
 