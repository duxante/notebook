import React, {useState } from "react";
import fire from "../../Utils/firebase.config";
import "./addNewUser.style.css";
import Sidebar from "../../Common/Sidebar/sidebar.component";
import Button from "../../Common/ButtonFolder/button.component";
import Dashboard from "../../Common/DashboardFolder/dashboard.component";


const AddNewUser = () => {
    const [user, setUser] = useState({
        employed:"",
        name:"",
        position:"",
        status:"",
    });

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
    };

    return(
        <div className="holder-centralni-dio">
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
        </div>
    )
} 

export default AddNewUser;