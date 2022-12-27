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
    name: yup.string().name("Name is invalid").required("Name is required"),
    position: yup.string().position().required("Position is required"),
    employed: yup.string().employed().required("Date of employment is required"),
    status: yup.string().status().required("Yes or No is required"),
    aboutMe: yup.string().aboutMe().required("Short description is required"),
})

const AddNewUser = () => {
    const [user, setUser] = useState({
        employed:"",
        name:"",
        position:"",
        status:"",
        about:"",
    });
    const [isOpen, setIsOpen] = useState(false);
    const [notificationConfig, setNotificationConfig] = useState({
        visible: false,
        severity: "",
        text: "",
    })
    

    const addUser = (e) => {
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitUser = (e) => {
        e.preventDefault();
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
        setIsOpen(false);
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
                    <form className="addNewUserForm">
                      {/*   <input value={user.name} placeholder="Name" name="name" onChange={addUser}/>
                
                    
                        <input value={user.position} placeholder="Position" name="position" onChange={addUser}/>
                    
                    
                        <input value={user.employed} placeholder="Employed" name="employed" onChange={addUser}/>
                    
                    
                        <input value={user.status} placeholder="Status" name="status" onChange={addUser}/>

                        <input value={user.about} placeholder="About Me" name="about" onChange={addUser}/> */}
                    <Formik
                            onSubmit={handleAddNewUser}
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
                                
                            )}    
                    </Formik>    
                    </form>    
                    <Button buttonText="Add New User" onClick={handleConfirmAddNewUser} />
                </div>
            </Dashboard>
        </HolderCentralniDio>
        </>
    )
} 

export default AddNewUser;