import { Outlet, Route, Routes } from "react-router-dom"
import { ViewerNav } from "../components/nav/CreatorNav.jsx"
import { ViewerHome } from "../components/home/ViewerHome.jsx"




export const ViewerViews = ({ currentViewcode }) => {
    return (
        <Routes>
            <Route 
                path="/" 
                element={
                    <>
                    <ViewerNav />
                    <Outlet />
                    </>
                }
                >

            <Route path="/" element={<ViewerHome currentViewcode={currentViewcode} />} />



            </Route>
        </Routes>
    )
}