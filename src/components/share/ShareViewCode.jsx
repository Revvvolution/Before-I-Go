import { Link, useNavigate } from "react-router-dom"
import "../home/Home.css"
import { useEffect, useState } from "react"
import { changeViewcode, getCreatorById } from "../../services/userService.jsx"

export const ShareViewCode = ({ currentUser }) => {

    const [creator, setCreator] = useState({})

    const navigate = useNavigate()


    useEffect(() => {

        getCreatorById(currentUser.id).then(data => {
            setCreator(data[0])
        })

    }, [currentUser])


    const handleNewLink = (event) => {
        event.preventDefault();

        changeViewcode(creator.id).then(() => {
            getCreatorById(currentUser.id).then(data => {
                setCreator(data[0])
            })
        } 
        )
    }


    return (
        <>
            <div className="vc-share-msg">
            <hr></hr>
            <h1>Before I Go - Share My Viewcode Link</h1>
            <p className="share-info">
                Copy your personal shareable link below and share it with the <br/>people you'd like to have viewing access to your entries:
            </p>
            <h2 className="ul-vc">http://localhost:5173/view-home/{creator?.viewcode}</h2>
            <hr></hr>
            </div>

            <div className="create-container">
                <button className="new-link"
                        onClick={(evt) => handleNewLink(evt)}>
                    New Link
                </button>
            </div>
        </>
    )
}