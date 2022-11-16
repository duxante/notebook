import "./deletedUsers.style.css";
import Sidebar from "../../Common/Sidebar/sidebar.component";
import Dashboard from "../../Common/DashboardFolder/dashboard.component";
import { useState, useEffect } from "react";
import fire from "../../Utils/firebase.config";
import Notification from "../../Common/NotificationFolder/notification.component";
import HolderCentralniDio from "../../Common/HolderCentralniDio/holderCentralniDio.component";


const DeletedUsers = () => {
    const [deletedUsers, setDeletedUsers] = useState([]);
    const [notificationConfig, setNotificationConfig] = useState({
        visible: false,
        severity: "",
        text: "",
    })
  

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


    const handleReactivateUser = async (reactivatedUser)  => {
        const db = fire.firestore();
        db.collection("users/").add({
            name: reactivatedUser.name,
            position: reactivatedUser.position,
            status: reactivatedUser.status,
            employed: reactivatedUser.employed,
            id: reactivatedUser.id,
        });
        await db.collection("deletedUsers").doc(reactivatedUser.id).delete();
        fetchDeletedUsers();
        setNotificationConfig({
            visible: true,
            severity: "success",
            text: "User successfully reactivated!",
        })
    }



    console.log(deletedUsers,'svi korisnici');

    return(
        <>
        {notificationConfig.visible &&
        <Notification 
            notificationConfig={notificationConfig}
            setNotificationConfig={setNotificationConfig}
        />
        }

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
                        <button key={Math.random()} onClick={() => handleReactivateUser(deletedUser)}>Reactivate</button>
                    </div>
                    )
                })} 
            </Dashboard>
        </HolderCentralniDio>
        </>
    )
}

export default DeletedUsers;