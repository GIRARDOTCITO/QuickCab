import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { SplashScreen } from './pages/SplashScreen'
import { LoginPage } from './pages/loginAndRegister/LoginPage.jsx'
import { RegisterPage } from './pages/loginAndRegister/RegisterPage.jsx'
import { HomePage } from './pages/HomePage.jsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={SplashScreen} />
        <Route exact path="/loginPage" Component={LoginPage} />
        <Route exact path="/registerPage" Component={RegisterPage} />
        <Route path="/homePage" Component={HomePage} />
      </Routes>
    </Router>
  )
}

export default App
