import ChooseFavrat from "../../../component/ChooseFav"
import Footer from "../../../component/common/footer"
import Header from "../../../component/common/header"
import SignupFrom from "../../../component/common/login&Signup"

function ContactPage(){
    return(
        <>
            <header>
                <Header page="Contact"/>
            </header>
            <ChooseFavrat title="Contact Us"/>
            <SignupFrom />
            <Footer />
        </>
    )
}

export default ContactPage