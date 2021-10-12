export interface Movie {
    id: number,
    title: string,
    poster: string,
    overview: string,
    release_date: number,
    genres: string[],
    rating: number
}

export interface MovieState {
    movies: Movie[],
    searchQuery: string
}