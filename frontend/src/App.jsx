
import Header from '../src/components/Header.jsx'
import Signup from '../src/components/authpage/Signup.jsx'
import Login from '../src/components/authpage/Login.jsx'
import Passreset from '../src/components/authpage/Passreset.jsx'
import Changepass from '../src/components/authpage/Changepass.jsx'
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
  
    </BrowserRouter>
    <Header />
    </>
  )
}

export default App