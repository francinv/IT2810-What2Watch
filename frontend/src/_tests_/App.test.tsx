import {render, screen, dummyPropFunction} from "./test-utils"
import userEvent from "@testing-library/user-event"
import SignIn from "../components/login";
import { Provider } from "react-redux";
import { store } from "../services/store";
import App from "../App";





const app = (
    <Provider store={store}>
        <App />
    </Provider>
)


describe("Verify that every components are loaded within App", ()=> {



    it("renders", ()=> {
        render(app)
    });



    test("Contains sidebar", () => {
        render(app)
        const objectToCheck = document.querySelector("#side-bar");
        expect(objectToCheck).toBeInTheDocument();
    })

    test("Contains navbar", () => {
        render(app)
        const objectToCheck = document.querySelector("#nav-bar");
        expect(objectToCheck).toBeInTheDocument();
    })
    
    test("Contains sortdropdown", () => {
        render(app)
        const objectToCheck = document.querySelector("#sort-drop-down");
        expect(objectToCheck).toBeInTheDocument();
    })

    test("Contains moviecontainer", () => {
        render(app)
        const objectToCheck = document.querySelector("#movie-container");
        expect(objectToCheck).toBeInTheDocument();
    })
})