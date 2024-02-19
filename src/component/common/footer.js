import { NavLink } from "react-router-dom"
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
function Footer(){
    return(
        <>
              <footer className="site-footer">
            <div className="container">
                <div className="row">

                    <div className="col-lg-3 col-10 me-auto mb-4">
                        <h4 className="text-white mb-3 footerHeading"><NavLink to="">Little</NavLink> Fashion</h4>
                        <p className="copyright-text text-muted mt-lg-5 mb-4 mb-lg-0">Copyright © 2024 <strong>Little Fashion</strong></p>
                        <br/>
                        <p className="copyright-text">Designed by <NavLink to="https://github.com/ashishhpdave" target="_blank">ashishhpdave</NavLink></p>
                    </div>

                    <div className="col-lg-5 col-8">
                        <h5 className="text-white mb-3">Sitemap</h5>

                        <ul className="footer-menu d-flex flex-wrap">
                            <li className="footer-menu-item"><NavLink to="about.html" className="footer-menu-link">Story</NavLink></li>

                            <li className="footer-menu-item"><NavLink to="#" className="footer-menu-link">Products</NavLink></li>

                            <li className="footer-menu-item"><NavLink to="#" className="footer-menu-link">Privacy policy</NavLink></li>

                            <li className="footer-menu-item"><NavLink to="#" className="footer-menu-link">FAQs</NavLink></li>

                            <li className="footer-menu-item"><NavLink to="#" className="footer-menu-link">Contact</NavLink></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-4">
                        <h5 className="text-white mb-3">Social</h5>

                        <ul className="social-icon">

                            <li><NavLink to="#" className="social-icon-link bi-youtube"><FaGithub /></NavLink></li>

                            <li><NavLink to="#" className="social-icon-link bi-whatsapp"><FaFacebook /></NavLink></li>

                            <li><NavLink to="#" className="social-icon-link bi-instagram"><BsTwitterX /></NavLink></li>

                            <li><NavLink to="#" className="social-icon-link bi-skype"><FaInstagram /></NavLink></li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
        </> 
    )
}

export default Footer