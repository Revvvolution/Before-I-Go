import { Outlet, Route, Routes } from "react-router-dom"
import { CreatorNav } from "../components/nav/CreatorNav.jsx"



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
            </Route>
        </Routes>
    )
}