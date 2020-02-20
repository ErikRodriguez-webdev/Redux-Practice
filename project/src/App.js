import React from "react";
import PlayerForm from "./components/PlayerForm";
import PlayerList from "./components/PlayerList";

import "./App.css";

function App() {
  return (
    <div className="center">
      <h1>Soccer Players</h1>
      <PlayerForm />
      <PlayerList />
    </div>
  );
}

export default App;
