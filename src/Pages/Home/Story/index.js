import OurTeam from "../../../component/common/OurTeam"
import Footer from "../../../component/common/footer"
import Header from "../../../component/common/header"
import ComponyFastion from "../../../component/compony"
import CustomerLove from "../../../component/coustomerLove"

function StoryPage(){
    return(
        <>
            <header>
                <Header page="Story"/>
            </header>
            <ComponyFastion />
            <OurTeam />
            <CustomerLove />
            <Footer />
        </>
    )
}

export default StoryPage