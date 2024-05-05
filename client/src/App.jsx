import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Components/Signup'
import Login from './Components/Login'
import ForgotPassword from './Components/ForgotPassword'

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/forgotpassword" element={<ForgotPassword />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
