import ChooseFavrat from "../../../component/ChooseFav"
import Footer from "../../../component/common/footer"
import Header from "../../../component/common/header"
import MainProduct from "../../../component/mainProduct"


function ProductPage(){
    return(
        <>
            <header>
                <Header page="Product"/>
            </header>
            <ChooseFavrat />
            <MainProduct />
            <Footer />
        </> 
    )
}

export default ProductPage