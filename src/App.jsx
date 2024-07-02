import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Authorized } from './views/Authorized.jsx'
import { ApplicationViews } from './views/ApplicationViews.jsx'
import { Login } from './components/auth/Login.jsx'
import { Register } from './components/auth/Register.jsx'
import { ViewJournal } from './components/journals/ViewJournal.jsx'
import { ViewPhotoMemories } from './components/photo-memories/ViewPhotoMemories.jsx'
import { ViewAbout } from './components/about-me/ViewAbout.jsx'
import { ViewerNav } from './components/nav/ViewerNav.jsx'
import { ViewerHome } from './components/home/ViewerHome.jsx'

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> 

      {/* Viewer Routes */}
      <Route path="/view-home/:viewcode" element={<> <ViewerHome /> </>} />
      <Route path="/view-journal" element={<> <ViewJournal /> </>} />
      <Route path="/view-photo-memories" element={<> <ViewPhotoMemories /> </>} />
      <Route path="/view-about-me" element={<> <ViewAbout /> </>} />


      {/* Logged in User Routes */}
      <Route path="*" element={
        <Authorized>
          <ApplicationViews />
        </Authorized>
      } />
    </Routes>
  )
}
