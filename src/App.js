import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import Profile from './components/profile/profile'
import {Route, Routes} from "react-router";
import './index.css'
import { LoginConnected } from "./components/login/loginContainer";


function App() {
  return (
    <div>
      <Header /> 
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/login" element={<LoginConnected />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
