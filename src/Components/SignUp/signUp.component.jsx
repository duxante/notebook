import "./signUp.style.css";
import MainHeading from "../../Common/MainHeading/mainHeading.component";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../../Common/ButtonFolder/button.component";
import Notification from "../../Common/NotificationFolder/notification.component";
import TransitionsModal from "../../Common/PopUp/popUp.component";
import { TextField } from "@mui/material";
import * as yup from 'yup';
import { Formik } from "formik";
import fire from "../../Utils/firebase.config";

const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*.,=?\-+<>|:;{}\\[\]\\/)(`\\])(?=.*)(?=.*[A-Z]).{8,}$/;

const initialSignUpValues = {
    firstName:"",
    lastName:"",
    email:"",
    password:""
};

const signUpScheme = yup.object().shape({
    lastName: yup.string().required("Last name is required"),
    firstName: yup.string().required("First name is required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
    password: yup.string().matches(passwordPattern, "Password must contain 1 capital letter, 1 number, 1 special character").required("Password is required")
});

const SignUp = () => {
    const navigate = useNavigate();
    const [signUpModal, setSignUpModal] = useState({
        visible: false,
        values: null,
        submitProps: null
    });
    const [notificationConfig, setNotificationConfig] = useState({
        visible: false,
        severity:"",
        text:""
    });
    const handleSubmitSignUp = () => {
        const { values } = signUpModal;
        const db = fire.firestore();
        db.collection("registeredUsers/").add({
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password
        });
        setNotificationConfig({
            visible: true,
            severity: "success",
            text: "User successfully signed up!"
        });
        setSignUpModal({
            visible: false,
            values: null,
            submitProps: null,
        });
        signUpModal.submitProps.resetForm();
        setTimeout(() => {
            navigate("/tasks");
          }, 3000);
        
    };
    const handleConfirmSignUpUser = (values, onSubmitProps) => {
        console.log(values, "values");
        setSignUpModal({
            visible: true,
            values: values,
            submitProps: onSubmitProps,
        });
    };



    return(
        <>
        {notificationConfig.visible && <Notification 
            notificationConfig={notificationConfig}
            setNotificationConfig={setNotificationConfig}
        />
        }

        <TransitionsModal 
        title="Sign Up new user?"
        isOpen={signUpModal.visible}
        setIsOpen={setSignUpModal}
        onClick={handleSubmitSignUp}
        />

        <div className="mainSignUpholder">
            <div className="signUpHolder">
                <MainHeading mainHeadingTitle='Sign Up' />
                    <div className="formHolder">
                        <Formik
                            onSubmit={handleConfirmSignUpUser}
                            initialValues={initialSignUpValues}
                            validationSchema={signUpScheme}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleBlur,
                                handleChange,
                                handleSubmit
                            }) => (
                                <form className="signUpForm" onSubmit={handleSubmit}>
                                    <TextField 
                                        label="First Name"
                                        name="firstName"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.firstName}
                                        error={Boolean(touched.firstName) && Boolean(errors.firstName)}
                                        helperText={touched.firstName && errors.firstName}
                                    />
                                    <TextField 
                                        label="Last Name"
                                        name="lastName"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.lastName}
                                        error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                                        helperText={touched.lastName && errors.lastName}
                                    />
                                    <TextField 
                                        label="Email"
                                        name="email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.email}
                                        error={Boolean(touched.email) && Boolean(errors.email)}
                                        helperText={touched.email && errors.email}
                                    />
                                    <TextField 
                                        label="Password"
                                        name="password"
                                        type="password"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.password}
                                        error={Boolean(touched.password) && Boolean(errors.password)}
                                        helperText={touched.password && errors.password}
                                    />
                                    <Button buttonText="Sign Up" type="submit"/>
                                    <p className="backToLogin">Back To <Link to="/login"> Login</Link></p>
                                    <p className="enjoyLife">enjoy life...</p>
                                    <p className="created">&copy; created by <b>Dux</b></p> 
                                </form>
                            )}
                        </Formik>
                    </div>
                </div> 
            </div>
        </>    
    )
}

export default SignUp;