import { NavLink } from "react-router-dom"
import ProductData from "../product"


const productMainData = [
    {
        img : "images/product/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg",
        span : "New Arrival",
        h5 : "Tree pot",
        p : "Original package design from house",
        small : "$25"
    },
    
    {
        img : "images/product/jordan-nix-CkCUvwMXAac-unsplash.jpeg",
        span : "New Arrival",
        h5 : "Festion Set",
        p : "Original package design from house",
        small : "$35"
    },
    {
        img : "images/product/nature-zen-3Dn1BZZv3m8-unsplash.jpeg",
        span : "Juice Drinks",
        h5 : "Tree pot",
        p : "Original package design from house",
        small : "$55"
    }
]
function FeatureProduct(){
    return(
        <>
                 <section className="featured-product section-padding">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-12 text-center">
                            <h2 className="mb-5">Featured Products</h2>
                        </div>

                       {
                        productMainData.map(function(item){
                            return(
                                <>
                                    <ProductData img={item.img} span={item.span} h5={item.h5} p={item.p} small={item.small}/>
                                </>
                            )
                        })
                       }


                        <div className="col-12 text-center">
                            <NavLink href="products.html" className="view-all">View All Products</NavLink>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default FeatureProduct