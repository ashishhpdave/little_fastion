import ChooseFavrat from "../../../component/ChooseFav"
import FeatureProduct from "../../../component/common/featureProduct"
import Footer from "../../../component/common/footer"
import Header from "../../../component/common/header"
import TreePot from "../../../component/treePot"

function ProductDeatilsPage(){
    return(
        <>
            <header>
                <Header page="Product-Deatils"/>
            </header>
            <ChooseFavrat title="We provide you Fashionable Stuffs"/>
            <TreePot />
            <FeatureProduct />
            <Footer />
        </>
    )
}

export default ProductDeatilsPage