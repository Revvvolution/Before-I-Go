import { useEffect, useState } from "react"
import { CreatorViews } from "./CreatorViews.jsx"


export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const localCreatorUser = localStorage.getItem("creator_user")
    const creatorUserObject = JSON.parse(localCreatorUser)

    setCurrentUser(creatorUserObject)
  }, [])

  return currentUser ? <CreatorViews currentUser={currentUser} /> : ""; /*<ViewerViews currentUser={currentUser}/> ; */
}
