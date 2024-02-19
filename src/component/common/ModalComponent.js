
function ModalComponent(){
    return(
        <>
    <div className="modal-body" style={{width: "500px", marginLeft : "-220px"} }>
                        <div className="row">
                            <div className="col-lg-6 col-12 mt-4 mt-lg-0">
                                <img src="images/product/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg" className="img-fluid product-image" alt=""/>
                            </div>

                            <div className="col-lg-6 col-12 mt-3 mt-lg-0">
                                <h3 className="modal-title" id="exampleModalLabel">Tree pot</h3>

                                <p className="product-price text-muted mt-3">$25</p>

                                <p className="product-p">Quatity: <span className="ms-1">4</span></p>

                                <p className="product-p">Colour: <span className="ms-1">Black</span></p>

                                <p className="product-p pb-3">Size: <span className="ms-1">S/S</span></p>

                                <div className="border-top mt-4 pt-3">
                                    <p className="product-p"><strong>Total: <span className="ms-1">$100</span></strong></p>
                                </div>

                            </div>
                        </div>
                    </div>
    
        </>
    )
}

export default ModalComponent