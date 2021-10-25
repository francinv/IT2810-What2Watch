import { apolloClient } from "../graphql";
import { getAllMovies } from "./__generated__/getAllMovies";
import { searchMovies } from "./__generated__/searchMovies";
import { GET_ALL_MOVIES, GET_MOVIES_BY_SEARCH } from "./movieQueries";

class MovieService {

    async getAllMovies(): Promise<getAllMovies["getAllMovies"]> {
        try {
            const response = await apolloClient.query({ query: GET_ALL_MOVIES })
            if(!response || !response.data) {
                throw new Error("Cannot get movies")
            }
            return response.data.getAllMovies
        } catch(error) {
            throw(error)
        }
    } 

    async getMoviesBySearch(page: number):
        Promise<searchMovies["getMoviesBySearch"]> {
        try { 
            const response = await apolloClient.query({
                query: GET_MOVIES_BY_SEARCH,
                variables: { 
                    searchQuery: "",
                    searchGenre: "Action",
                    page: page
                }
            })
            if(!response || !response.data) {
                throw new Error("Cannot get movies")
            }
            return response.data.getMoviesBySearch;
        } catch(error) {
            throw(error)
        }
    }
}

export default new MovieService();
