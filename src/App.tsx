import React from "react";
import appStyles from "./Styles/appStyles.module.css"; 
import Gameboard from "./Components/Gameboard";

const App: React.FC = () => {
  return (
    <React.StrictMode> 
      <div className={`${appStyles.container} ${appStyles.flex}`}>
        <Gameboard>
        </Gameboard>
      </div>
    </React.StrictMode>
  );
};

export default App;