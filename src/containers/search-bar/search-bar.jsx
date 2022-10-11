import { useState } from "react"
import style from "./search-bar.module.css"

const SearchBar = (props) => {

    const { onSearchMovie } = props

    const [movieName, setMovieName]= useState("")

    return (
        <div className={style.searchBar}>
            <input type="text" value={movieName} onChange={e => setMovieName(e.target.value)}></input>
            <button onClick={() => onSearchMovie(movieName)}>Search</button>
        </div>
    )
}

export default SearchBar