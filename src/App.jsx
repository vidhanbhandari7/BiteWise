import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp";
import WelcomePage from "./pages/WelcomePage";
import ResultPage from "./pages/ResultPage";
function App() {
return (
  <Router>
    <Routes>
      <Route path="/Home" element={<HomePage/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/SignIn" element={<SignIn/>}/>
      <Route path="/WelcomePage" element={<WelcomePage/>}/>
      <Route path="/ResultPage" element={<ResultPage/>}/>


    </Routes>
  </Router>
)
}

export default App
