import "./deletedUsers.style.css";
import MainHeading from "../../Common/MainHeading/mainHeading.component";
import Sidebar from "../../Common/Sidebar/sidebar.component";


const DeletedUsers = ({
    mainHeadingTitle
}) => {
    return(
        <div class="holder-centralni-dio">
            <Sidebar />
            <div className="deletedUsersDashboard">
                <div className="onlyForMainHeadingTitle">
                    <MainHeading 
                        mainHeadingTitle="Deleted Users"
                    />
                </div>
               <div className="deletedUsersSubtitle">
                    <h4>PERSON</h4>
                    <h4>FUNCTION</h4>
                    <h4>STATUS</h4>
                    {/* <h4>ACTION</h4> */}
                </div> 
            </div>
        </div>
    )
}

export default DeletedUsers;