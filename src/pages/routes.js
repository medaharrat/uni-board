import Board from "../components/Board";
import Login from "../components/Login";

const routes = [
    {
        name: "board",
        path: "/board",
        element: <Board />
    },
    {
        name: "login",
        path: "/login",
        element: <Login />
    }
]

export default routes;