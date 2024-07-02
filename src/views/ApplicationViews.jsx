import { useEffect, useState } from "react"
import { CreatorViews } from "./CreatorViews.jsx"


export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})
  const [currentViewcode, setCurrentViewcode] = useState({})

  useEffect(() => {
    const localCreatorUser = localStorage.getItem("creator_user")
    const creatorUserObject = JSON.parse(localCreatorUser)

    const localViewcode = localStorage.getItem("page-view")
    const viewcodeObject = JSON.parse(localViewcode)

    setCurrentUser(creatorUserObject)

    setCurrentViewcode(viewcodeObject)
  }, [])

    if (currentUser) {
      return (
      <CreatorViews currentUser={currentUser} />
      )
     }
     else if (currentViewcode) {
      return (
      <ViewerViews currentViewcode={currentViewcode}/>
      )
    } else {
      return ("")
    }
  
}
