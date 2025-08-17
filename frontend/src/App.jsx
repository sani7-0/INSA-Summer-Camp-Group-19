
import Header from '../src/components/Header.jsx'
import Signup from '../src/components/authpage/Signup.jsx'
import Login from '../src/components/authpage/Login.jsx'
import Passreset from '../src/components/authpage/Passreset.jsx'
import Changepass from '../src/components/authpage/Changepass.jsx'
import Profile from '../src/components/Profile.jsx'
import Events from '../src/components/Events.jsx'
import Discussion from '../src/components/Discussion.jsx'
import Saved, { SavedMessagesProvider } from '../src/components/Saved.jsx'
import Studywin from '../src/components/Studywin.jsx'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
     
    <Routes>
      <Route path ="/Signin" element={<Login />} />
      <Route path ="/ " element={<Signup />} />
      <Route path ="/Signup" element={<Signup />} />
      <Route path ="/Forgotpassword" element={<Passreset />} />
      <Route path ="/changepassword" element={<Changepass />} />
       </Routes>
       <Header />
       <Routes>
      <Route path ="/Profile" element={<Profile/>}/>
      <Route path ="/Events" element={<Events/>}/>
      <Route path ="/Discussion" element={<Discussion/>}/>
      <Route path ="/Saved" element={<SavedMessagesProvider><Saved/></SavedMessagesProvider>}/>
      <Route path ="/Studywin" element={<Studywin/>}/>
    </Routes>
  
    </BrowserRouter>
   
    </>
  )
}

export default App