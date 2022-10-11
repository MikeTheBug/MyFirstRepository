import { useState } from "react"
import { useEffect } from "react"
import { getNowPlayingMovies, getPopularMovies, searchMovie } from "../../api/movie-api"
import MovieListItem from "./movie-list-item"
import style from "./movie-list.module.css"

const MovieList = (props) => {

    const { callType, searchedMovie } = props

    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        if (callType == "popular") {
            getPopularMovies(page)
                .then(
                    ({data}) => {
                        setMovies(data.results)
                    }
                )
        }
        else if (callType == "nowplaying") {
            getNowPlayingMovies(page)
                .then(
                    ({data}) => {
                        setMovies(data.results)
                    }
                )
        }
        else {
            searchMovie(page, searchedMovie)
                .then(
                    ({data}) => {
                        setMovies(data.results)
                    }
                )
        }
    }, [page, searchedMovie])

    const nextPage = () => {
        console.log("next page")
        setPage(p => p + 1)
    }

    const previousPage = () => {
        console.log("previous page")
        if (page > 1) {
            setPage(p => p - 1)
        }
    }

    return (
        <>
            <div className={style.pageContainer}>
                <button onClick={previousPage}>-</button>
                <button onClick={nextPage}>+</button>
            </div>
            <div className={style.movieGrid}>
                {movies.map(
                    m => <MovieListItem key={m.id} {...m}></MovieListItem>
                )}
            </div>
        </>
    )
}

export default MovieList