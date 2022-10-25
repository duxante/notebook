import "./users.style.css";
import Sidebar from "../../Common/Sidebar/sidebar.component";
import Dashboard from "../../Common/DashboardFolder/dashboard.component";

const Users = () => {
    return(
        <div class="holder-centralni-dio">
            <Sidebar />
            <Dashboard mainHeadingTitle="Users">
               <div className="usersSubtitles">
                    <h4>PERSON</h4>
                    <h4>FUNCTION</h4>
                    <h4>STATUS</h4>
                    <h4>EMPLOYED</h4>
                    <h4>ACTION</h4>
                </div>
            </Dashboard>
        </div>
    )
}

export default Users;