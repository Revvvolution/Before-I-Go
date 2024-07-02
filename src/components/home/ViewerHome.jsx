import { Link, useNavigate } from "react-router-dom"
import "./Home.css"
import { useEffect, useState } from "react"
import { getCreatorById } from "../../services/userService.jsx"

export const ViewerHome = ({ currentViewcode }) => {

    const [view, setView] = useState([])

    const navigate = useNavigate()

    useEffect(() => {

        getCreatorById(currentViewcode.viewcode).then(data => {
            setView(data)
        })

    }, [currentViewcode])


    return (
        <>
            <div className="home-greeting">
            <hr></hr>
            <h1>Before I Go - Home</h1>
            <h2>Welcome to View Mode!</h2>
            <hr></hr>
            </div>
        </>
    )
}