import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Components/Signup'
import Login from './Components/Login'
import 'bootstrap/dist/css/bootstrap.min.css'








function App() {

  return (
  //  <div>
  //   <Sign />
  //  </div>
  <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
