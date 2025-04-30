import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp";
import Welcome from "./pages/Welcome";
import Goals from "./pages/Goals";
function App() {
return (
  <Router>
    <Routes>
      <Route path="/Home" element={<HomePage/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/SignIn" element={<SignIn/>}/>
      <Route path="/Welcome" element={<Welcome/>}/>
      <Route path="/Goals" element={<Goals/>}/>


    </Routes>
  </Router>
)
}

export default App
