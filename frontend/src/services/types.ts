import { getAllMovies } from "./__generated__/getAllMovies";

export default interface IMoviesList {
    movies: getAllMovies["getAllMovies"];
    loading: boolean;
    nextPage: number;
    filterSearch: String;
    filterGenre: String;
    filterDate: number;
}