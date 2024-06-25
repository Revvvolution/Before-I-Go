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
            <h1>My Page - Home</h1>
            <hr></hr>
            <h2>Welcome, {fName}!</h2>
            </div>

            <div className="create-container">
                <figure className="new-journal-container">
                    <img className="journal-logo" src="https://www.pikpng.com/pngl/b/356-3567628_quill-and-ink-png.png" alt="Journal Logo"
                        onClick={() => {navigate("/journal/new-entry")}} />
                    <figcaption>New Journal Entry</figcaption>
                </figure>
            </div>
        </>
    )
}