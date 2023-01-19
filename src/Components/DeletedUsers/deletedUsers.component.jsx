import "./deletedUsers.style.css";
import Sidebar from "../../Common/Sidebar/sidebar.component";
import Dashboard from "../../Common/DashboardFolder/dashboard.component";
import { useState, useEffect } from "react";
import fire from "../../Utils/firebase.config";
import Notification from "../../Common/NotificationFolder/notification.component";
import HolderCentralniDio from "../../Common/HolderCentralniDio/holderCentralniDio.component";
import TransitionsModal from "../../Common/PopUp/popUp.component";


const DeletedUsers = () => {
    const [deletedUsers, setDeletedUsers] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [userForReactivate, setUserForReactivate] = useState(null);
    const [notificationConfig, setNotificationConfig] = useState({
        visible: false,
        severity: "",
        text: "",
    })
  
    const notebookOwner = JSON.parse(localStorage.getItem("userData"));

    const fetchDeletedUsers = async () => {
        const db = fire.firestore();
        const response = db.collection("deletedUsers");
        const data = await response.get();
        const newDeletedUsers = data.docs.map((deletedUser) => {
            const deletedUserData = deletedUser.data();
            const singleDeletedUser = {
                name: deletedUserData.name,
                position: deletedUserData.position,
                status: deletedUserData.status,
                employed: deletedUserData.employed,
                id: deletedUser.id,
            }
            return singleDeletedUser;
        });
        setDeletedUsers([...newDeletedUsers]);
      };

    useEffect(() => {
        fetchDeletedUsers();
      }, []);


    const handleReactivateUser = async ()  => {
        const db = fire.firestore();
        db.collection("users/").add({
            name: userForReactivate.name,
            position: userForReactivate.position,
            status: userForReactivate.status,
            employed: userForReactivate.employed,
            id: userForReactivate.id,
        });
        await db.collection("deletedUsers").doc(userForReactivate.id).delete();
        fetchDeletedUsers();
        setNotificationConfig({
            visible: true,
            severity: "success",
            text: "User successfully reactivated!",
        })
        setIsOpen(false);
    }

    const handleOpenReactivateConfirm = (userForReactivation) => {
        setIsOpen(true);
        setUserForReactivate(userForReactivation);
    }

    return(
        <>
        {notificationConfig.visible &&
        <Notification 
            notificationConfig={notificationConfig}
            setNotificationConfig={setNotificationConfig}
        />
        }
        
        <TransitionsModal 
        title="Do you want to reactivate user?"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onClick={handleReactivateUser}
        />

        <HolderCentralniDio>
            <Sidebar />
            <Dashboard mainHeadingTitle="Deleted Users">
                <div className="deletedUsersSubtitle">
                    <h4>PERSON</h4>
                    <h4>FUNCTION</h4>
                    <h4>EMPLOYED</h4>
                    <h4>STATUS</h4>
                    <h4>ACTION</h4>
                </div>
                {deletedUsers.map((deletedUser, index) => {
                    return(
                    <div key={index} className="deletedUser">
                        <p key={Math.random()} className="deletedUserParagraph">{deletedUser.name}</p>
                        <p key={Math.random()} className="deletedUserParagraph">{deletedUser.position}</p>
                        <p key={Math.random()} className="deletedUserParagraph">{deletedUser.status}</p>
                        <p key={Math.random()} className="deletedUserParagraph">{deletedUser.employed}</p>
                        {notebookOwner.role === "superAdmin" ? 
                      <button key={Math.random()} onClick={() => handleOpenReactivateConfirm(deletedUser)}>Reactivate</button> : 
                      <button disabled="disabled">Reactivate user</button>
                    }
                    </div>
                    )
                })} 
            </Dashboard>
        </HolderCentralniDio>
        </>
    )
}

export default DeletedUsers;