import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import Profile from './components/profile/profile'
import Login from "./components/login/login";
import {Route, Routes} from "react-router";
import './index.css'


function App() {
  return (
    <div>
      <Header /> 
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
