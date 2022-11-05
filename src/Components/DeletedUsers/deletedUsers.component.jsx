import "./deletedUsers.style.css";
import Sidebar from "../../Common/Sidebar/sidebar.component";
import Dashboard from "../../Common/DashboardFolder/dashboard.component";
import { useState, useEffect } from "react";
import fire from "../../Utils/firebase.config";


const DeletedUsers = () => {
    const [deletedUsers, setDeletedUsers] = useState([]);

    const fetchDeletedUsers = async () => {
        const db = fire.firestore();
        const response = db.collection("deletedUsers");
        const data = await response.get();
        const newDeletedUsers = data.docs.map((deletedUser) => {
          return deletedUser.data();
        });
        setDeletedUsers([...newDeletedUsers]);
      };

    useEffect(() => {
        fetchDeletedUsers();
      }, []);


    console.log(deletedUsers,'svi korisnici');

    return(
        <div className="holder-centralni-dio">
            <Sidebar />
            <Dashboard mainHeadingTitle="Deleted Users">
                <div className="deletedUsersSubtitle">
                    <h4>PERSON</h4>
                    <h4>FUNCTION</h4>
                    <h4>STATUS</h4>
                    <h4>ACTION</h4>
                </div>
                {deletedUsers.map((deletedUser, index) => {
                    return(
                    <div key={index} className="deletedUser">
                        <p key={Math.random()} className="deletedUserParagraph">{deletedUser.name}</p>
                        <p key={Math.random()} className="deletedUserParagraph">{deletedUser.position}</p>
                        <p key={Math.random()} className="deletedUserParagraph">{deletedUser.employed}</p>
                        <p key={Math.random()} className="deletedUserParagraph">{deletedUser.status}</p>
                        <button key={Math.random()}>Reactivate</button>
                    </div>
                    )
                })} 
            </Dashboard>
        </div>
    )
}

export default DeletedUsers;