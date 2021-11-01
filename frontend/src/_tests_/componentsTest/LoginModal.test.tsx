import {render, screen, dummyPropFunction} from "../test-utils"
import userEvent from "@testing-library/user-event"
import SignIn from "../../components/login";
import { Provider } from "react-redux";
import { store } from "../../services/store";





const loginmodal = (
    <Provider store={store}>
        <SignIn isLoginModalVisible={true} onCloseClick={dummyPropFunction}/>
    </Provider>
)


describe("LoginModal", ()=> {



    it("renders", ()=> {
        render(loginmodal)
    });



    test("loginmodal is showing correct content", () => {
        render(loginmodal)
        expect(screen.getByText("Sign in")).toBeInTheDocument();
        const signInBtn = document.querySelector("#signin-modal");
        expect(signInBtn).toBeInTheDocument();
    })

    test("Usernamefield is typeable", () => {
        const {getByLabelText} =render(loginmodal)
        const userNameField = getByLabelText(/username/i)
        userEvent.type(userNameField, "test");
        expect(userNameField).toHaveValue("test")
    })
})