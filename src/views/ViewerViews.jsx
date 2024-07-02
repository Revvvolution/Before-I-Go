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

            {/* Journals Route */}
            <Route path="journal">
                <Route index element={<JournalList currentViewcode={currentViewcode} />} />
                <Route path="new-entry" element={<JournalForm currentViewcode={currentViewcode} />} />
                <Route path="edit/:journalId" element={<EditJournal currentViewcode={currentViewcode} />} />
            </Route>

            {/* Photo Memories Route */}
            <Route path="photo-memories">
                <Route index element={<PhotoMemories currentViewcode={currentViewcode} />} />
                <Route path="new-entry" element={<PhotoMemoryForm currentViewcode={currentViewcode} />} />
            </Route>

            {/* About Me Route */}
            <Route path="about-me">
                <Route index element={<AboutList currentViewcode={currentViewcode} />} />
                <Route path="new-entry" element={<AboutMeForm currentViewcode={currentViewcode} />} />
                <Route path="edit/:aboutMeObjId" element={<EditAbout currentViewcode={currentViewcode} />} />
            </Route>

            {/* Share Viewcode Route */}
            <Route path="share" element={<ShareViewCode currentViewcode={currentViewcode} />} />

            </Route>
        </Routes>
    )
}