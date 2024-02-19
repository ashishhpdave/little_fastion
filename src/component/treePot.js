import { useState } from "react";
import { NavLink } from "react-router-dom"
import ModalComponent from "./common/ModalComponent";

function TreePot(){

    const [showModal, setShowModal] = useState(false);

    const handleAddToCart = () => {
        setShowModal(true);
    };

    return(
        <>
              <section className="product-detail section-padding">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12">
                            <div className="product-thumb">
                                <img src="images/product/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg" className="img-fluid product-image" alt=""/>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12">
                            <div className="product-info d-flex">
                                <div>
                                    <h2 className="product-title mb-0">Tree pot</h2>

                                    <p className="product-p">Original package design from house</p>
                                </div>

                                <small className="product-price text-muted ms-auto mt-auto mb-5">$25</small>
                            </div>

                            <div className="product-description">

                                <strong className="d-block mt-4 mb-2">Description</strong>

                                <p className="lead mb-5">Over three years in business, We’ve had the chance to work on NavLink variety of projects, with companies</p>
                            </div>

                            <div className="product-cart-thumb row">
                                <div className="col-lg-6 col-12">
                                    
                                    <select className="form-select cart-form-select" id="inputGroupSelect01">
                                        <option selected>Quantity</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>

                                <div className="col-lg-6 col-12">
                                    <button  type="submit" className="btn custom-btn cart-btn" data-bs-toggle="modal" onClick={handleAddToCart}>Add to Cart</button>
                                    {showModal && <ModalComponent />} {/* Conditionally render modal */}
                                </div>

                                <p>
                                    <NavLink style={{textDecoration: "none"}} href="#" className="product-additional-link">Details</NavLink>

                                    <NavLink style={{textDecoration : "none"}} href="#" className="product-additional-link">Delivery and Payment</NavLink>
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default TreePot