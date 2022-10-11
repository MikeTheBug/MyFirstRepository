import { IMAGE_URL } from "../../api/movie-api"
import style from "./movie-list.module.css"

const MovieListItem = (props) => {

    const { id, title, overview, poster_path } = props

    return (
        <div className={style.movie}>
            <img src={IMAGE_URL + poster_path}></img>
            <div className={style.info}>
                <h1>{title}</h1>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default MovieListItem