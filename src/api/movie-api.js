import axios from "axios"

const BASE_URL = "https://api.themoviedb.org/3/"

const SEARCH_URL = "search/movie"
const POPULAR_URL = "movie/popular"
const NOW_PLAYING_URL = "movie/now_playing"

const API_KEY = "c9e23b610c2f0c1040a493fc10ce5aaf"
const LANGUAGE = "fr-FR"

const baseParam = {
    api_key: API_KEY,
    language: LANGUAGE
}

export const IMAGE_URL = "https://image.tmdb.org/t/p/w500/"

export function searchMovie(page, movieName) {
    return axios.get(BASE_URL + SEARCH_URL, {
        params: {
            ...baseParam,
            page: page,
            query: movieName
        }
    })
}   

export function getPopularMovies(page) {
    return axios.get(BASE_URL + POPULAR_URL, {
        params: {
            ...baseParam,
            page
        }
    })
}

export function getNowPlayingMovies(page) {
    return axios.get(BASE_URL + NOW_PLAYING_URL, {
        params: {
            ...baseParam,
            page
        }
    })
}