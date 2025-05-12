import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import WelcomePage from "./pages/WelcomePage";
import ResultPage from "./pages/ResultPage";
import SettingsPage from "./pages/SettingsPage";
import MealTracker from "./pages/MealTracker";
import NutritionAnalytics from "./pages/NutritionAnalytics";
import BiteWiseHeader from "./components/BiteWiseHeader";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/Home' replace />} />
        <Route path='/Home' element={<HomePage />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/WelcomePage' element={<WelcomePage />} />
        <Route path='/ResultPage' element={<ResultPage />} />
        <Route path='/SettingsPage' element={<SettingsPage />} />
        <Route path='/MealTracker' element={<MealTracker />} />
        <Route path='/NutritionAnalytics' element={<NutritionAnalytics />} />
        <Route path='/BiteWiseHeader' element={<BiteWiseHeader />} />
      </Routes>
    </Router>
  );
}

export default App;
