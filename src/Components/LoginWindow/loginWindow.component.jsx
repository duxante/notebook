import "./loginWindow.style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainHeading from "../../Common/MainHeading/mainHeading.component";


const LoginWindow = () => {
    const [isFormVisible, setIsFormVisible] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [userData, setUserData] = useState({
        email:``,
        password:``
    })

    const handleChangeUserData = (e) => {
        e.preventDefault();
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const navigate = useNavigate();

    const handleSubmitUserData = (e) => {
        e.preventDefault();
        if (userData.email === 'admin@admin.com' && userData.password === 'admin'){
            setIsEmailValid(true);
            setIsFormVisible(false);
            navigate('/users');
        } else {
            setIsEmailValid(false);
            setIsPasswordValid(false);
            setIsFormVisible(true);
        }
    }

    return(
        <div className={isFormVisible ? "loginHolder" : "none"}>

            <MainHeading 
            mainHeadingTitle="Log in"
            />
            
            <div className="addUserForm">
                <label>
                    <input placeholder="Email" onChange={handleChangeUserData} name="email"/>   
                </label>
                {isEmailValid ? null : <span className="spanWarning">Email je neispravan, pokušajte ponovo.</span>}
                <br/>
                <label>
                    <input placeholder="Password" onChange={handleChangeUserData}name="password"/>
                </label>
                {isPasswordValid ? null : <span className="spanWarning">Password je neispravan, pokušajte ponovo.</span>}
                <br/>
            </div>
                <button className="loginButton" onClick={handleSubmitUserData}>Submit</button>
                <p className="enjoyLife">enjoy life...</p>
                <p className="created">&copy; created by <b>Dux</b></p>  
        </div>
        
    )
}

export default LoginWindow;