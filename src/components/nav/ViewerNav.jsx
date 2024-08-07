import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./Nav.css"

export const ViewerNav = () => {
    const navigate = useNavigate()

    return (
        <div className="navbar-container-viewer">
          <figure className="site-logo-container">
            <img className="site-logo" src="/images/BeforeIGo_logo.png" alt="Site Logo"
                  onClick={() => {navigate("/view-home")}} />
          </figure>
        <ul className="navbar-viewer">
            <li className="navbar-item">
                <Link to='/view-journal'>My Journal</Link>
            </li>
            <li className="navbar-item">
                <Link to='/view-photo-memories'>Photo Memories</Link>
            </li>
            <li className="navbar-item">
                <Link to='/view-about-me'>About Me</Link>
            </li>
        </ul>
        </div>
    )
}