import ChooseFavrat from "../../../component/ChooseFav"
import Footer from "../../../component/common/footer"
import Header from "../../../component/common/header"
import ContactDeatils from "../../../component/common/login&Signup"

function ContactPage(){
    return(
        <>
            <header>
                <Header page="Contact"/>
            </header>
            <ChooseFavrat title="Contact Us"/>
            <ContactDeatils />
            <Footer />
        </>
    )
}

export default ContactPage