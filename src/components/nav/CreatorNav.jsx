import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./Nav.css"

export const CreatorNav = () => {
    const navigate = useNavigate()

    return (
        <div className="navbar-container">
          <figure className="site-logo-container">
            <img className="site-logo" src="/images/BeforeIGo_logo.png" alt="Site Logo"
                  onClick={() => {navigate("/")}} />
          </figure>
        <ul className="navbar">
            <li className="navbar-item">
                <Link to='/journal'>My Journal</Link>
            </li>
            <li className="navbar-item">
                <Link to='/photo-memories'>Photo Memories</Link>
            </li>
            <li className="navbar-item">
                <Link to='/about-me'>About Me</Link>
            </li>
            <li className="navbar-item">
                <Link to="/share">Share My Memories</Link>
            </li>
            {localStorage.getItem("creator_user") ? (
                <li className="navbar-item navbar-logout">
                    <Link
                        className="navbar-link"
                        to=""
                        onClick={() => {
                            localStorage.removeItem("creator_user")
                            navigate("/", { replace: true })
                        }}
                    >
                        Logout
                    </Link>
                </li>
            ) : (
            ""
            )}
        </ul>
        </div>
    )
}
