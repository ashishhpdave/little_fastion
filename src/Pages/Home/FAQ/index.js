import ChooseFavrat from "../../../component/ChooseFav"
import FAQ from "../../../component/common/faq"
import Footer from "../../../component/common/footer"
import Header from "../../../component/common/header"

function FAQsPage() {
    return (
        <>
            <header>
                <Header page="FAQ" />
            </header>
            <ChooseFavrat title="Your favorite questions
and our answers to them"/>
            <FAQ />
            <Footer />
        </>
    )
}

export default FAQsPage