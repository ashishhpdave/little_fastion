
function ChooseFavrat(item){
    const {title}=item
    return(
        <>
             <header className="site-header section-padding d-flex justify-content-center align-items-center mt-5">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-10 col-12">
                            <h1>
                                <span className="d-block text-primary orange chooseText " style={{backgroundColor : "#FFA500;"}}>{title}</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default ChooseFavrat