import { Outlet, Route, Routes } from "react-router-dom"
import { CreatorNav } from "../components/nav/CreatorNav.jsx"
import { Home } from "../components/home/Home.jsx"
import { JournalList } from "../components/journals/JournalList.jsx"



export const CreatorViews = ({ currentUser }) => {
    return (
        <Routes>
            <Route 
                path="/" 
                element={
                    <>
                    <CreatorNav />
                    <Outlet />
                    </>
                }
                >

            <Route path="/" element={<Home currentUser={currentUser} />} />

            {/* Journals Route */}
            <Route path="journal" element={<JournalList currentUser={currentUser} />} />

            </Route>
        </Routes>
    )
}