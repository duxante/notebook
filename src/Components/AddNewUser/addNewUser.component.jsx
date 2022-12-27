import React, {useState } from "react";
import fire from "../../Utils/firebase.config";
import "./addNewUser.style.css";
import Sidebar from "../../Common/Sidebar/sidebar.component";
import Button from "../../Common/ButtonFolder/button.component";
import Dashboard from "../../Common/DashboardFolder/dashboard.component";
import Notification from "../../Common/NotificationFolder/notification.component";
import HolderCentralniDio from "../../Common/HolderCentralniDio/holderCentralniDio.component";
import TransitionsModal from "../../Common/PopUp/popUp.component";
import { TextField } from "@mui/material";
import * as yup from 'yup';
import { Formik } from "formik";


const initialAddNewUserValues = {
    name:"",
    position:"",
    employed:"",
    status:"",
    aboutMe:""
}

const addNewUserScheme = yup.object().shape({
    name: yup.string().required("Name is required"),
    position: yup.string().required("Position is required"),
    employed: yup.string().required("Date of employment is required"),
    status: yup.string().required("Yes or No is required"),
    aboutMe: yup.string().required("Short description is required"),
})

const AddNewUser = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [notificationConfig, setNotificationConfig] = useState({
        visible: false,
        severity: "",
        text: "",
    });
    const handleSubmitUser = (values, onSubmitProps) => {
        /* e.preventDefault();
        const db = fire.firestore();
        db.collection("users/").add({
          name: user.name,
          position: user.position,
          employed: user.employed,
          status: user.status,
          about: user.about,
        });
        setUser({
            employed:"",
            name:"",
            position:"",
            status:"",
            about:"",
        })
        setNotificationConfig({
            visible: true,
            severity: "success",
            text: "User added!",
        })
        setIsOpen(false); */
    }; 

    const handleConfirmAddNewUser = () => {
        setIsOpen(true);
    }

    return(
        <>
        {notificationConfig.visible && <Notification 
            notificationConfig={notificationConfig}
            setNotificationConfig={setNotificationConfig}
        />
        }

        <TransitionsModal 
        title="Add user?"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onClick={handleSubmitUser}
        />
        <HolderCentralniDio>
                <Sidebar />
            <Dashboard mainHeadingTitle="Add New User">

                <div className="addNewUserDataInput">
                      {/*   <input value={user.name} placeholder="Name" name="name" onChange={addUser}/>
                
                    
                        <input value={user.position} placeholder="Position" name="position" onChange={addUser}/>
                    
                    
                        <input value={user.employed} placeholder="Employed" name="employed" onChange={addUser}/>
                    
                    
                        <input value={user.status} placeholder="Status" name="status" onChange={addUser}/>

                        <input value={user.about} placeholder="About Me" name="about" onChange={addUser}/> */}
                    <Formik
                            onSubmit={handleConfirmAddNewUser}
                            initialValues={initialAddNewUserValues}
                            validationSchema={addNewUserScheme}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleBlur,
                                handleChange,
                                handleSubmit
                            }) => (
                                <form className="addNewUserForm">
                                    <TextField 
                                        label="Name"
                                        name="name"
                                        onBlur={handleBlur}
                                        value={values.name}
                                        error={Boolean(touched.name) && Boolean(errors.name)}
                                        helperText={touched.name && errors.name}
                                    />
                                    <TextField 
                                        label="Position"
                                        name="position"
                                        onBlur={handleBlur}
                                        value={values.position}
                                        error={Boolean(touched.position) && Boolean(errors.position)}
                                        helperText={touched.position && errors.position}
                                    />
                                    <TextField 
                                        label="Employed"
                                        name="employed"
                                        onBlur={handleBlur}
                                        value={values.employed}
                                        error={Boolean(touched.employed) && Boolean(errors.employed)}
                                        helperText={touched.employed && errors.employed}
                                    />
                                    <TextField 
                                        label="Status"
                                        name="status"
                                        onBlur={handleBlur}
                                        value={values.status}
                                        error={Boolean(touched.status) && Boolean(errors.status)}
                                        helperText={touched.status && errors.status}
                                    />
                                    <TextField 
                                        label="About me"
                                        name="aboutMe"
                                        onBlur={handleBlur}
                                        value={values.aboutMe}
                                        error={Boolean(touched.aboutMe) && Boolean(errors.aboutMe)}
                                        helperText={touched.aboutMe && errors.aboutMe}
                                    />
                                    <Button buttonText="Add New User" onClick={handleConfirmAddNewUser} />
                                </form>
                            )}    
                    </Formik>    
                </div>
            </Dashboard>
        </HolderCentralniDio>
        </>
    )
} 

export default AddNewUser;