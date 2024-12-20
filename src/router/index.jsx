import List from "~/components/list"
import Cards from "~/components/cards"
const routerPublic = [
    { path: "/cards", element: <Cards/> },
    { path: "/cards/:data/", element: <Cards/> },
    { path: "/list", element: <List/> }

]

export default routerPublic;