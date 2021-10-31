import {render, screen} from "../test-utils"
import userEvent from "@testing-library/user-event"
import NavBar from "../../components/navbar";

describe("NavBar", ()=> {
    test("navbar is showing logo text", () => {
        render(<NavBar onCloseClick={dummy} isLoginModalVisible={false}/>)
        expect(screen.getByText("What to Watch?")).toBeInTheDocument();
    })
    test("search field is in navbar", () => {
        const {getByLabelText} =        render(<NavBar onCloseClick={dummy} isLoginModalVisible={false}/>)
        expect(getByLabelText(/search/i)).toBeInTheDocument();
    })
    test("search in navbar is typeable", () => {
        const {getByLabelText} =        render(<NavBar onCloseClick={dummy} isLoginModalVisible={false}/>)
        const searchField= getByLabelText(/search/i)
        userEvent.type(searchField, "hei");
        expect(searchField).toHaveValue("hei")
    })
})


function dummy(){

}