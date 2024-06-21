import { Link } from "react-router-dom"
import "./Home.css"
import { useEffect, useState } from "react"
import { getCreatorById } from "../../services/userService.jsx"

export const Home = ({ currentUser }) => {

    const [creator, setCreator] = useState([])

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
        </>
    )
}