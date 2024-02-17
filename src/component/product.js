import { NavLink } from "react-router-dom"

function ProductData(data){
    return(
        <>
              <div className="col-lg-4 col-12 mb-3">
                            <div className="product-thumb">
                                <NavLink to="product-detail.html">
                                    <img src={data.img} className="img-fluid product-image" alt=""/>
                                </NavLink>

                                <div className="product-top d-flex">
                                    <span className="product-alert me-auto">{data.span}</span>

                                    <NavLink to="#" className="bi-heart-fill product-icon"></NavLink>
                                </div>

                                <div className="product-info d-flex">
                                    <div>
                                        <h5 className="product-title mb-0">
                                            <NavLink to="product-detail.html" className="product-title-link">{data.h5}</NavLink>
                                        </h5>

                                        <p className="product-p">{data.p}</p>
                                    </div>

                                    <small className="product-price text-muted ms-auto mt-auto mb-5">{data.small}</small>
                                </div>
                            </div>
                        </div>
        </>
    )
}

export default ProductData