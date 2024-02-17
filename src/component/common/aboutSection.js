import { NavLink } from "react-router-dom"

function AboutSection() {
    return (
        <>
            <section className="about section-padding">
                <div className="container">
                    <div className="row">

                        <div className="col-12 text-center">
                            <h2 className="mb-5">Get started with <span>Little</span> Fashion</h2>
                        </div>

                        <div className="col-lg-2 col-12 mt-auto mb-auto">
                            <ul className="nav nav-pills mb-5 mx-auto justify-content-center align-items-center" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Introduction</button>
                                </li>

                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-youtube-tab" data-bs-toggle="pill" data-bs-target="#pills-youtube" type="button" role="tab" aria-controls="pills-youtube" aria-selected="true">How we work?</button>
                                </li>

                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-skill-tab" data-bs-toggle="pill" data-bs-target="#pills-skill" type="button" role="tab" aria-controls="pills-skill" aria-selected="false">Capabilites</button>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-10 col-12">
                            <div className="tab-content mt-2" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                                    <div className="row">
                                        <div className="col-lg-7 col-12">
                                            <img src="images/pim-chu-z6NZ76_UTDI-unsplash.jpeg" className="img-fluid" alt="" />
                                        </div>

                                        <div className="col-lg-5 col-12">
                                            <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                                                <h4 className="mb-3">Good <span>Design</span> <br />Ideas for <span>your</span> fashion</h4>

                                                <p>Little Fashion templates comes with sign in / sign up pages, product listing / product detail, about, FAQs, and contact page.</p>

                                                <p>Since this HTML template is based on Boostrap 5 CSS library, you can feel free to add more components as you need.</p>

                                                <div className="mt-2 mt-lg-auto">
                                                    <NavLink to="about.html" className="custom-link mb-2">
                                                        Learn more about us
                                                        <i className="bi-arrow-right ms-2"></i>
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection