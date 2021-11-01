import {render, screen, dummyPropFunction} from "../test-utils"
import userEvent from "@testing-library/user-event"
import NavBar from "../../components/navbar";
import { Provider } from "react-redux";
import { store } from "../../services/store";





const navbar = (
    <Provider store={store}>
        <NavBar onCloseClick={dummyPropFunction} isLoginModalVisible={false}/>  
    </Provider>
)


describe("NavBar", ()=> {



    it("renders", ()=> {
        render(navbar)
    });



    test("navbar is showing logo text", () => {
        render(navbar)
        expect(screen.getByText("What to Watch?")).toBeInTheDocument();
    })

    test("search field is in navbar", () => {
        const {getByLabelText} = render(navbar)
        expect(getByLabelText(/search/i)).toBeInTheDocument();
    })

    test("search in navbar is typeable", () => {
        const {getByLabelText} =render(navbar)
        const searchField= getByLabelText(/search/i)
        userEvent.type(searchField, "hei");
        expect(searchField).toHaveValue("hei")
    })

    test("Login button is showing", () => {
        const {getByLabelText} =render(navbar)
        const loginBtn = document.querySelector("#login-button-in-appbar");
        expect(loginBtn).toBeInTheDocument()
    })
})
