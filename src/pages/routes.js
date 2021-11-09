import Board from "../components/Board";
import Login from "../components/Login";

const routes = [
    {
        name: "informatics",
        path: "/IK",
        element: <Board faculty="informatics" />
    },
    {
        name: "sciences",
        path: "/TTK",
        element: <Board faculty="sciences" />
    },
    {
        name: "economics",
        path: "/GTK",
        element: <Board faculty="economics" />
    },
    {
        name: "login",
        path: "/login",
        element: <Login />
    }
]

export default routes;