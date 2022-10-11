import { useState } from "react"
import MovieList from "../../containers/movie-list/movie-list"
import SearchBar from "../../containers/search-bar/search-bar"

const Search = () => {

    const [searchedMovie, setSearchedMovie] = useState("harry")

    return (
        <>
            <SearchBar onSearchMovie={(m) => setSearchedMovie(m)}></SearchBar>
            <MovieList searchedMovie={searchedMovie}></MovieList>
        </>
    )
}

export default Search