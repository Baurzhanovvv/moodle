import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import Profile from './components/profile/profile'
import {Route, Routes} from "react-router";
import './index.css'


function App() {
  return (
    <div>
      <Header /> 
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
