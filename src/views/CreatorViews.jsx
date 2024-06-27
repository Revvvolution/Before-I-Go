import { Outlet, Route, Routes } from "react-router-dom"
import { CreatorNav } from "../components/nav/CreatorNav.jsx"
import { Home } from "../components/home/Home.jsx"
import { JournalList } from "../components/journals/JournalList.jsx"
import { PhotoMemories } from "../components/photo-memories/PhotoMemories.jsx"
import { JournalForm } from "../components/entry-forms/JournalForm.jsx"
import { EditJournal } from "../components/journals/EditJournal.jsx"
import { PhotoMemoryForm } from "../components/entry-forms/PhotoMemoryForm.jsx"



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
            <Route path="journal">
                <Route index element={<JournalList currentUser={currentUser} />} />
                <Route path="new-entry" element={<JournalForm currentUser={currentUser} />} />
                <Route path="edit/:journalId" element={<EditJournal currentUser={currentUser} />} />
            </Route>

            {/* Photo Memories Route */}
            <Route path="photo-memories">
                <Route index element={<PhotoMemories currentUser={currentUser} />} />
                <Route path="new-entry" element={<PhotoMemoryForm currentUser={currentUser} />} />
            </Route>

            </Route>
        </Routes>
    )
}