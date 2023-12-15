import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import Profile from './components/profile/profile'
import Clubs from './components/clubs/clubs'
import {Route, Routes} from "react-router";
import './index.css'
import { LoginConnected } from "./components/login/loginContainer";
import { HeaderConnected } from "./components/header/headerContainer";
import { RegistConnected } from "./components/registration/registContainer";



function App() {
  return (
    <div>
      <HeaderConnected /> 
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/login" element={<LoginConnected />} />
        <Route exact path="/register" element={<RegistConnected />} />
        <Route exact path="/clubs" element={<Clubs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
