import React, { useState, useEffect } from "react";
import "./users.style.css";
import Sidebar from "../../Common/Sidebar/sidebar.component";
import Dashboard from "../../Common/DashboardFolder/dashboard.component";
import fire from "../../Utils/firebase.config";
import Notification from "../../Common/NotificationFolder/notification.component";
import HolderCentralniDio from "../../Common/HolderCentralniDio/holderCentralniDio.component";
import TransitionsModal from "../../Common/PopUp/popUp.component";
import UserOverview from "../../Common/UserOverview/userOverview.component";



const Users = () => {
    const [users, setUsers] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [userForDelete, setUserForDelete] = useState(null);
    const [notificationConfig, setNotificationConfig] = useState({
      visible: false,
      severity: "",
      text: "",
  })
  const [userViewConfig, setUserViewConfig] = useState({
    isVisible: false,
    name:"",
    position: "",
    about:"",
    status:"",
    employed:"",
  })
  const notebookOwner = JSON.parse(localStorage.getItem("userData"));

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
            about: userData.about,
            id: user.id,
          }
          return singleUserData;
        });
        setUsers([...newUsers]);
      };

      useEffect(() => {
        fetchUsers()
      }, []);

    
    const handleDeleteUser = async () => {
      const db = fire.firestore();
      db.collection("deletedUsers/").add({
        name: userForDelete.name,
        position: userForDelete.position,
        employed: userForDelete.employed,
        status: userForDelete.status,
      });
      await db.collection("users").doc(userForDelete.id).delete();
      fetchUsers();
      setNotificationConfig({
        visible: true,
        severity: "error",
        text: "User sucssesfully deleted!",
    }) 
      setIsOpen(false);
    }

    const handleOpenDeleteConfirm = (user) => {
      setIsOpen(true);
      setUserForDelete(user);
    }

    const handleOpenAboutUser = (userToView) => {
        setUserViewConfig({
          isVisible: true,
          name: userToView.name,
          position: userToView.position,
          about: userToView.about,
          status: userToView.status,
          employed: userToView.employed,
        })
    }
      
    return(
      <>
        {notificationConfig.visible && 
          <Notification 
              notificationConfig={notificationConfig}
              setNotificationConfig={setNotificationConfig}
          />
        }

        {userViewConfig.isVisible &&
        <UserOverview 
        userViewConfig={userViewConfig}
        setUserViewConfig={setUserViewConfig}
        />
        }

        <TransitionsModal 
        title="Do you want to delete user?"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onClick={handleDeleteUser}
        />
        
        <HolderCentralniDio>
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
                    <p key={Math.random()} className="userParagraph" onClick={() => handleOpenAboutUser(user)}>{user.name}</p>
                    <p key={Math.random()} className="userParagraph">{user.position}</p>
                    <p key={Math.random()} className="userParagraph">{user.employed}</p>
                    <p key={Math.random()} className="userParagraph">{user.status}</p>
                    {notebookOwner.role === "superAdmin" ? 
                      <button key={Math.random()} onClick={() => handleOpenDeleteConfirm(user)}>Delete</button> : 
                      <button disabled="disabled">Delete user</button>
                    }
                    </div>
                    
                  )
                })}
            </Dashboard>
        </HolderCentralniDio>  
    </>
    )
}

export default Users;