import React, { useState, useEffect } from "react";
import "./users.style.css";
import Sidebar from "../../Common/Sidebar/sidebar.component";
import Dashboard from "../../Common/DashboardFolder/dashboard.component";
import fire from "../../Utils/firebase.config";



const Users = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const db = fire.firestore();
        const response = db.collection("users");
        const data = await response.get();
        const newUsers = data.docs.map((user) => {
          return user.data();
        });
        setUsers([...newUsers]);
      };

    useEffect(() => {
        fetchUsers();
      }, []);
    
    console.log(users,'svi korisnici');
      
    return(
        <div className="holder-centralni-dio">
            <Sidebar />
            <Dashboard mainHeadingTitle="Users">
               <div className="usersSubtitles">
                    <h4>NAME</h4>
                    <h4>POSITION</h4>
                    <h4>EMPLOYED</h4>
                    <h4>STATUS</h4>
                    <h4>ACTION</h4>
                </div>
                {users.map((user, index) => {
                  return(
                    <div key={index} className="user">
                    <p key={Math.random()} className="userParagraph">{user.name}</p>
                    <p key={Math.random()} className="userParagraph">{user.position}</p>
                    <p key={Math.random()} className="userParagraph">{user.employed}</p>
                    <p key={Math.random()} className="userParagraph">{user.status}</p>
                    <button key={Math.random()}>Delete</button>
                    </div>
                  )
                })}
            </Dashboard>
        </div>
    )
}

export default Users;