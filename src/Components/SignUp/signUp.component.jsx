import "./signUp.style.css";
import MainHeading from "../../Common/MainHeading/mainHeading.component";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    return(
        <div className="mainSignUpholder">
            <div className="signUpHolder">

                <MainHeading 
                mainHeadingTitle='Sign Up'
                />

                <div className="signUpForm">
                    <label>
                        <input placeholder="First Name" />
                    </label>
                    <label>
                        <input placeholder="Last Name" />
                    </label>
                    <label>
                        <input placeholder="Email" />
                    </label>
                    <label>
                        <input placeholder="Password" />
                    </label>
                </div>
                <button className="signUpButton">Submit</button>
                <p className="enjoyLife">enjoy life...</p>
                <p className="created">&copy; created by <b>Dux</b></p>  
            </div>
        </div>
    )
}

export default SignUp;