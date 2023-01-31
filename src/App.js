import { Route, Routes } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App({}) {
  return (
    <div className="app-wrapper">
      <Navbar />
      <HeaderContainer />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="profile/:id?" element={<ProfileContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/music" element={<Music />} />
          <Route path="/news" element={<News />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
