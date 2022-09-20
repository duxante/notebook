import "./mainScreen.style.css";
import React from "react";
import LoginWindow from "../LoginWindow/loginWindow.component";



const MainScreen = () => {
    return(
        <>
        <div className="mainScreenHolder">
          <LoginWindow /> 
          <p className="created">&copy; created by <b>Dux</b></p>  
        </div>
        </>
    )
}

export default MainScreen;