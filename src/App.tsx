import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import FavoriteFood from "./components/FavoriteFood";
import Hobbies from "./components/Hobbies";
import Interests from "./components/Interests";
import Personality from "./components/Personality";
import SocialLinks from "./components/SocialLinks";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Profile />
        <FavoriteFood />
        <Hobbies />
        <Interests />
        <Personality />
        <SocialLinks />
      </main>
    </div>
  );
}

export default App;
