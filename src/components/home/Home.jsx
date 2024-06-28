import { Link, useNavigate } from "react-router-dom"
import "./Home.css"
import { useEffect, useState } from "react"
import { getCreatorById } from "../../services/userService.jsx"

export const Home = ({ currentUser }) => {

    const [creator, setCreator] = useState([])

    const navigate = useNavigate()

    useEffect(() => {

        getCreatorById(currentUser.id).then(data => {
            const activeCreator = data.filter(c => c.id === currentUser.id)
            setCreator(activeCreator)
        })

    }, [currentUser])

    const fName = creator.map(data => {
        const nameData = data.name.split(" ")[0]
        return nameData
    })

    return (
        <>
            <div className="home-greeting">
            <hr></hr>
            <h1>Before I Go - Home</h1>
            <h2>Welcome, {fName}!</h2>
            <hr></hr>
            </div>

            <div className="create-container">
                <figure className="new-entry-container">
                    <img className="clickable-icon" src="https://www.pikpng.com/pngl/b/356-3567628_quill-and-ink-png.png" alt="Journal Logo"
                        onClick={() => {navigate("/journal/new-entry")}} />
                    <figcaption>New Journal Entry</figcaption>
                </figure>
                <figure className="new-entry-container">
                    <img className="clickable-icon icon-photo" src="/images/polaroid-frame.png" alt="Photo Logo"
                        onClick={() => {navigate("/photo-memories/new-entry")}} />
                    <figcaption>New Photo Memory</figcaption>
                </figure>
                <figure className="new-entry-container">
                    <img className="clickable-icon icon-about" src="/images/about-icon.png" alt="About Logo"
                        onClick={() => {navigate("/about-me/new-entry")}} />
                    <figcaption className="about-y">New About Me Entry</figcaption>
                </figure>
            </div>
        </>
    )
}