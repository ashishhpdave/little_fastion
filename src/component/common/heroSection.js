import { NavLink } from "react-router-dom"

function Hero() {
    return (
        <>
            <section className="slick-slideshow">
                <div className="slick-custom">
                    <img src="images/slideshow/team-meeting-renewable-energy-project.jpeg" className="img-fluid" alt="" />

                    <div className="slick-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-10">
                                    <h1 className="slick-title">Cool Fashion</h1>

                                    <p className="lead text-white mt-lg-3 mb-lg-5">Little fashion template comes with total 8 HTML pages provided by Tooplate website.</p>

                                    <NavLink href="about.html" className="btn custom-btn">Learn more about us</NavLink>
                                </div>
                                <ul className="slick-dots" style={{ display: 'block' }} role="tablist">
                                    <li className="slick-active" role="presentation">
                                        <button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 3" tabIndex="0" aria-selected="true">1</button>
                                    </li>
                                    <li role="presentation" className="">
                                        <button type="button" role="tab" id="slick-slide-control01" aria-controls="slick-slide01" aria-label="2 of 3" tabIndex="-1">2</button>
                                    </li>
                                    <li role="presentation" className="">
                                        <button type="button" role="tab" id="slick-slide-control02" aria-controls="slick-slide02" aria-label="3 of 3" tabIndex="-1">3</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero