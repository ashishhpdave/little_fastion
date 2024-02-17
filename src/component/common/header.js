import { NavLink } from "react-router-dom"

function Header({page}){
    return(
        <>
             <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <NavLink className={page === 'Home' ? 'navbar-brand' : 'navbar-brand'}to="/">
                        <strong><span>Little</span> Fashion</strong>
                    </NavLink>

                    <div className="d-lg-none">
                        <NavLink to="sign-in.html" className="bi-person custom-icon me-3"></NavLink>

                        <NavLink to="product-detail.html" className="bi-bag custom-icon"></NavLink>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="index.html">Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="about.html">Story</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="products.html">Products</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="faq.html">FAQs</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="contact.html">Contact</NavLink>
                            </li>
                        </ul>

                        <div className="d-none d-lg-block">
                            <NavLink to="sign-in.html" className="bi-person custom-icon me-3"></NavLink>

                            <NavLink to="product-detail.html" className="bi-bag custom-icon"></NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header