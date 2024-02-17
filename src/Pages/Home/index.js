import AboutSection from "../../component/common/aboutSection"
import Header from "../../component/common/header"
import Hero from "../../component/common/heroSection"

function HomePage(){
    return(
        <>
            <header>
                <Header page="Home"/>
            </header>
            <Hero />
            <AboutSection />
        </>
    )
}

export default HomePage