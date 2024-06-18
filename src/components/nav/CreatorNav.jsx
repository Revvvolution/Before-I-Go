import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./Nav.css"

export const CreatorNav = () => {
    const navigate = useNavigate

    return <ul className="navbar">
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
        {localStorage.getItem("honey_user") ? (
            <li className="navbar-item navbar-logout">
                <Link
                    className="navbar-link"
                    to=""
                    onClick={() => {
                        localStorage.removeItem("honey_user")
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
}