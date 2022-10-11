import { Link } from "react-router-dom"
import style from "./nav-bar.module.css"

const NavBar = () => {
    return (
        <nav className={style.nav}>
            <Link to="/search">Search</Link>
            <Link to="/popular">Popular</Link>
            <Link to="/now-playing">Now Playing</Link>
        </nav>
    )
}

export default NavBar