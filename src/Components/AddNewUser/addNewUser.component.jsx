import React, {useState } from "react";
import fire from "../../Utils/firebase.config";
import "./addNewUser.style.css";
import Sidebar from "../../Common/Sidebar/sidebar.component";
import Button from "../../Common/ButtonFolder/button.component";
import Dashboard from "../../Common/DashboardFolder/dashboard.component";
import Notification from "../../Common/NotificationFolder/notification.component";
import HolderCentralniDio from "../../Common/HolderCentralniDio/holderCentralniDio.component";


const AddNewUser = () => {
    const [user, setUser] = useState({
        employed:"",
        name:"",
        position:"",
        status:"",
    });
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
        });
        setUser({
            employed:"",
            name:"",
            position:"",
            status:"",
        })
        setNotificationConfig({
            visible: true,
            severity: "success",
            text: "User added!",
        })
    };

    return(
        <>
        {notificationConfig.visible && <Notification 
            notificationConfig={notificationConfig}
            setNotificationConfig={setNotificationConfig}
        />
        }
        <HolderCentralniDio>
                <Sidebar />
            <Dashboard mainHeadingTitle="Add New User">

                <div className="addNewUserDataInput">
                    <form className="addNewUserForm">
                        <input value={user.name} placeholder="Name" name="name" onChange={addUser}/>
                
                    
                        <input value={user.position} placeholder="Position" name="position" onChange={addUser}/>
                    
                    
                        <input value={user.employed} placeholder="Employed" name="employed" onChange={addUser}/>
                    
                    
                        <input value={user.status} placeholder="Status" name="status" onChange={addUser}/>
                    </form>    
                    <Button buttonText="Add New User" onClick={handleSubmitUser} />
                </div>
            </Dashboard>
        </HolderCentralniDio>
        </>
    )
} 

export default AddNewUser;