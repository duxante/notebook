import "./users.style.css";
import { useNavigate } from "react-router-dom";
import MainHeading from "../../Common/MainHeading/mainHeading.component";
import { useState } from "react";
import AddNewUser from "../AddNewUser/addNewUser.component";
import Sidebar from "../../Common/Sidebar/sidebar.component";

const Users = ({
    mainHeadingTitle
}) => {
    return(
        <div class="holder-centralni-dio">
            <Sidebar />
            <div className="usersDashboard">
                <div className="onlyForMainHeadingTitle">
                    <MainHeading 
                        mainHeadingTitle="Users"
                    />
                </div>
               <div className="usersSubtitles">
                    <h4>PERSON</h4>
                    <h4>FUNCTION</h4>
                    <h4>STATUS</h4>
                    <h4>EMPLOYED</h4>
                    <h4>ACTION</h4>
                </div> 
            </div>
        </div>
    )
}

export default Users;