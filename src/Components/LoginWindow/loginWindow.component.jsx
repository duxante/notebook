import "./loginWindow.style.css";
import { useNavigate, Link } from "react-router-dom";
import MainHeading from "../../Common/MainHeading/mainHeading.component";
import Button from "../../Common/ButtonFolder/button.component";
import { Formik } from 'formik';
import * as yup from 'yup';
import { TextField } from "@mui/material";

const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*.,=?\-+<>|:;{}\\[\]\\/)(`\\])(?=.*)(?=.*[A-Z]).{8,}$/;

const initialLoginValues = {
    email:"",
    password:""
};

const loginUserScheme = yup.object().shape({
    email: yup.string().email("Email is invalid").required("Email is required"),
    password: yup.string().matches(passwordPattern, "Password must contain 1 capital letter, 1 number, 1 special character").required("Password is required").required("Password is required"),
});

const LoginWindow = () => {
    const navigate = useNavigate();
    const handleLoginSubmit = (values, onSubmitProps) => {
        if (values.email === 'admin@admin.com' && values.password === 'admin'){
            onSubmitProps.resetForm();
            navigate('/users');
        } 
        else (
            alert("Something went wrong, please check your credentials!")
        )
    }

    return(
        <div className="mainLoginHolder">
            <div className="loginHolder">
                <MainHeading mainHeadingTitle="Log in" />
                <div className="formHolder">
                    <Formik
                        onSubmit={handleLoginSubmit}
                        initialValues={initialLoginValues}
                        validationSchema={loginUserScheme}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleBlur,
                            handleChange,
                            handleSubmit
                        }) => (
                            <form className="addUserForm" onSubmit={handleSubmit}>
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
                                <Button buttonText="LOGIN" type="submit" />
                                <p className="orSignUp">Or <Link to="/signUp"> Sign Up</Link></p>
                                <p className="enjoyLife">enjoy life...</p>
                                <p className="created">&copy; created by <b>Dux</b></p>      
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
        
    )
}

export default LoginWindow;