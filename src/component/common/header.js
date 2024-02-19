import { NavLink } from "react-router-dom"
import { IoMdPerson } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
function Header({page}){
    return(
        <>
             <nav className="navbar navbar-expand-lg">
                <div className="container" style={{height : "20px"}}>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <NavLink className={page === 'Home' ? 'navbar-brand' : 'pt-4 navbar-brand'}to="/">
                        <strong><span>Little</span> Fashion</strong>
                    </NavLink>

                    <div className="d-lg-none">
                        <NavLink to="sign-in.html" className="bi-person custom-icon me-3"></NavLink>

                        <NavLink to="product-detail.html" className="bi-bag custom-icon"></NavLink>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarNav" >
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item pt-5">
                                <NavLink  className={page === 'Home' ? '  nav-link active' : '  nav-link '}to="/">Home</NavLink>
                            </li>

                            <li className="nav-item pt-5">
                                <NavLink className={page === 'Story' ? '   nav-link active ' : '  nav-link '}to="/story">Story</NavLink>
                            </li>

                            <li className="nav-item pt-5">
                                <NavLink className={page === 'Product' ? '   nav-link active ' : '  nav-link '}to="/product">Products</NavLink>
                            </li>

                            <li className="nav-item pt-5">
                                <NavLink className={page === 'FAQ' ? '   nav-link active ' : '  nav-link '}to="/FAQ">FAQs</NavLink>
                            </li>

                            <li className="nav-item pt-5">
                                <NavLink  className={page === 'Contact' ? '   nav-link active ' : '  nav-link '}to="/contact_us">Contact</NavLink>
                            </li>
                        </ul>

                           <div className="d-flex mt-4">
                           <NavLink className= {page === 'bi-person custom-icon me-3' ? '   nav-link active ' : '  nav-link '}to="/Sign_In"><IoMdPerson /></NavLink>
                            <NavLink className= {page === 'bi-bag custom-icon' ? '   nav-link active ' : '  nav-link '}to="/Sign_In"><FaShoppingBag /></NavLink>
    
                           </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header