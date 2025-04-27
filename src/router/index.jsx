import List from "~/components/list"
import Cards from "~/components/cards"
import Home from "~/components/Home/home";
//admin
import CardAdmin from "~/components/Admin/Card/card";

export const routerPublic = [
    { path: "/cards", element: <Cards/> },
    { path: "/cards/:data/", element: <Cards/> },
    { path: "/list/:data/", element: <List/> },
    { path: "/list", element: <List/> },
    { path: "/", element: <Home/> },
]
export const routerPrivate = [
    {path: "/admin/cards", element: <CardAdmin/> },
]

export default routerPublic;