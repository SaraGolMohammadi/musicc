import Home from "./pages/home/Home";
import Categories from "./pages/categories/Categories";
import Playlist from "./pages/Playlist/Playlist";
import Artists from "./pages/Artists/Artists";
let routes = [
    {path: '/', element: <Home />},
    {path: '/Categories', element: <Categories />},
    {path: '/Artists', element: <Artists/>},
]
export default routes