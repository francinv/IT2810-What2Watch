import {render, screen, dummyPropFunction} from "../test-utils"
import userEvent from "@testing-library/user-event"
import MovieModal from "../../components/moviedetail/DetailedMovieModal"
import { Provider } from "react-redux"
import NavBar from "../../components/navbar"
import { store } from "../../services/store"


const testMovie = {
    id: "287947",
    title:"Shazam!",
    genres: ["Action","Comedy","Fantasy"],
    release_date:1553299200,
    overview: "A boy is given the ability to become an adult superhero in times of need with a single magic word.",
    poster: "https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
    favoritedByUser: []
}
const moviemodal = (
    <Provider store={store}>
        <MovieModal movie={testMovie} onCloseClick={dummyPropFunction}/>
    </Provider>
)


describe("MovieModal", ()=> {
    test("MovieModal is showing", () => {
        //Verifying object is not there before rendering
        const testNotObject = document.querySelector("#detailed-movie-view");
        expect(testNotObject).not.toBeInTheDocument()
        render(moviemodal)
        //Verifying object is there after rendering
        const testObject = document.querySelector("#detailed-movie-view");
        expect(testObject).toBeInTheDocument()
    })
    test("Correct movie info is showing in the moviemodal", () => {
        render(moviemodal)
        expect(screen.getByText("Shazam!")).toBeInTheDocument();
        expect(screen.getByText("About the movie")).toBeInTheDocument();
        expect(screen.getByText("2019-3-23")).toBeInTheDocument();
        expect(screen.getByText("A boy is given the ability to become an adult superhero in times of need with a single magic word.")).toBeInTheDocument();
        expect(screen.getByText("Action, Comedy, Fantasy")).toBeInTheDocument();
    })

})