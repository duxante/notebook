import "./deletedUsers.style.css";
import Sidebar from "../../Common/Sidebar/sidebar.component";
import Dashboard from "../../Common/DashboardFolder/dashboard.component";


const DeletedUsers = () => {
    return(
        <div className="holder-centralni-dio">
            <Sidebar />
            <Dashboard mainHeadingTitle="Deleted Users">
                <div className="deletedUsersSubtitle">
                    <h4>PERSON</h4>
                    <h4>FUNCTION</h4>
                    <h4>STATUS</h4>
                    {/* <h4>ACTION</h4> */}
                </div> 
            </Dashboard>
        </div>
    )
}

export default DeletedUsers;