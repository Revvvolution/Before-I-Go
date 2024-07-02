import { Link, useNavigate, useParams } from "react-router-dom"
import "./Home.css"
import { useEffect, useState } from "react"
import { getCreatorByViewcode } from "../../services/userService.jsx"

export const ViewerHome = () => {

    const [creator, setCreator] = useState({})

    const { viewcode } = useParams();

    const navigate = useNavigate()

    useEffect(() => {

        getCreatorByViewcode(viewcode).then(data => {
            setCreator(data[0])
        })

    }, [])


    return (
        <> { creator ? 
            <div className="home-greeting">
            <hr></hr>
            <h1>Before I Go - Home</h1>
            <h2>Welcome to <span className="view-name">{creator.name}'s</span> Home Page!</h2>
            <hr></hr>

            <button className="journal-btn"
                    onClick={() => {navigate("/view-journal", {state: { userId: creator.id }})}}
                    >
                View Journal
            </button>

            <button className="photo-memories-btn"
                    onClick={() => {navigate("/view-photo-memories", {state: { userId: creator.id }})}}
                    >
                View Photo Memories
            </button>

            <button className="about-me-btn"
                    onClick={() => {navigate("/view-about-me", {state: { userId: creator.id }})}}
                    >
                View About Me
            </button>
            </div> 
            : <h1>This link is no longer valid.</h1> }
        </>
    )
}