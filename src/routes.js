import { Navigate } from "react-router";
import NowPlaying from "./pages/now-playing/now-playing";
import Popular from "./pages/popular/popular";
import Search from "./pages/search/search";

export const routes = [
    {
        path: "/search",
        element: <Search/>
    },
    {
        path: "/popular",
        element: <Popular/>
    },
    {
        path: "/now-playing",
        element: <NowPlaying/>
    },
    {
        path: "*",
        element: <Navigate to="/search"/>
    }
]