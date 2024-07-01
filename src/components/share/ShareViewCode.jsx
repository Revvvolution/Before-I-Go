import { Link, useNavigate } from "react-router-dom"
import "../home/Home.css"
import { useEffect, useState } from "react"
import { getCreatorById } from "../../services/userService.jsx"

export const ShareViewCode = ({ currentUser }) => {

    const [creator, setCreator] = useState([])

    const navigate = useNavigate()

    useEffect(() => {

        getCreatorById(currentUser.id).then(data => {
            setCreator(data)
        })

    }, [currentUser])


    return (
        <>
            <div className="vc-share-msg">
            <hr></hr>
            <h1>Before I Go - Share My Viewcode</h1>
            <p className="share-info">
                Copy your personal viewcode below and share it with the <br/>people you'd like to have viewing access to your entries:
            </p>
            <h2 className="ul-vc">{currentUser?.viewcode}</h2>
            <hr></hr>
            </div>

            <div className="create-container">

            </div>
        </>
    )
}