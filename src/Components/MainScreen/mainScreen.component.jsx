import "./mainScreen.style.css";
import React from "react";
import LoginWindow from "../LoginWindow/loginWindow.component";
import { useNavigate } from "react-router-dom";



const MainScreen = () => {
  const navigate = useNavigate();
    return(
        <>
        <div className="mainScreenHolder">
          <div className="left">
            <p>Welcome to <br/> DUXANTE</p>
          </div>
          <div className="right">
            <div className="welcomeButtons">
              <h1>Choose your action</h1>
              <div className="actionsHolder">
                  <button onClick={() => navigate('/login')}>
                    Login
                  </button>
                  <p className="or">OR</p>
                  <button>
                    Sign Up
                  </button>
                </div>  
            </div>
          </div>
          
          
        </div>
        </>
    )
}

export default MainScreen;