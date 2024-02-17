import AboutSection from "../../component/common/aboutSection"
import FeatureProduct from "../../component/common/featureProduct"
import Footer from "../../component/common/footer"
import Header from "../../component/common/header"
import Hero from "../../component/common/heroSection"
import ReatailShop from "../../component/reatailShop"

function HomePage(){
    return(
        <>
            <header>
                <Header page="Home"/>
            </header>
            <Hero />
            <AboutSection />
            <ReatailShop />
            <FeatureProduct />
            <Footer />
        </>
    )
}

export default HomePage