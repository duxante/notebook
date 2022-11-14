import React, { useState, useEffect } from "react";
import "./users.style.css";
import Sidebar from "../../Common/Sidebar/sidebar.component";
import Dashboard from "../../Common/DashboardFolder/dashboard.component";
import fire from "../../Utils/firebase.config";
import Notification from "../../Common/NotificationFolder/notification.component";



const Users = () => {
    const [users, setUsers] = useState([]);
    const [notificationConfig, setNotificationConfig] = useState({
      visible: false,
      severity: "",
      text: "",
  })

    const fetchUsers = async() => {
        const db = fire.firestore();
        const response = db.collection("users");
        const data = await response.get();
        const newUsers = data.docs.map((user) => {
          const userData = user.data();
          const singleUserData = {
            name: userData.name,
            position: userData.position,
            employed: userData.employed,
            status: userData.status,
            id: user.id,
          }
          setNotificationConfig({
            visible: true,
            severity: "info",
            text: "User sucssesfully deleted!",
        })
          return singleUserData;
        });
        setUsers([...newUsers]);
      };

    useEffect(() => {
        fetchUsers()
      }, []);

    
    const handleDeleteUser = async (user) => {
      const db = fire.firestore();
      db.collection("deletedUsers/").add({
        name: user.name,
        position: user.position,
        employed: user.employed,
        status: user.status,
      });
      await db.collection("users").doc(user.id).delete();
      fetchUsers();
    }

    
    console.log(users,'svi korisnici');
      
    return(
      <>
      {notificationConfig.visible && 
      <Notification 
          notificationConfig={notificationConfig}
          setNotificationConfig={setNotificationConfig}
      />
      }
      
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
                  <button key={Math.random()} onClick={() => handleDeleteUser(user)}>Delete</button>
                  </div>
                )
              })}
          </Dashboard>
      </div>  
    </>
    )
}

export default Users;