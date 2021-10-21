import { apolloClient } from "../graphql";
import { getAllMovies } from "./--tagname=gql/getAllMovies";
import { GET_ALL_MOVIES } from "./movieQueries";

class MovieService {

    async getAllMovies(): Promise<getAllMovies["getAllMovies"]> {
        try {
            const response = await apolloClient.query({ query: GET_ALL_MOVIES })
            if(!response || !response.data) {
                throw new Error("Cannot get movies")
            }
            return response.data;
        } catch(error) {
            throw(error)
        }
    } 

}

export default new MovieService();
