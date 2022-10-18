import MainHeading from "../../Common/MainHeading/mainHeading.component";
import "./addNewUser.style.css";
import Sidebar from "../../Common/Sidebar/sidebar.component";


const AddNewUser = ({
    mainHeadingTitle,
}) => {
    return(
        <div className="holder-centralni-dio">
                <Sidebar />
            <div className="addNewUserForm">

                <MainHeading
                mainHeadingTitle="Add New User"
                />

                <div className="addNewUserDataInput">
                    <label>
                        <input placeholder="Person name" name="personName"/>
                    </label>
                    <label>
                        <input placeholder="Function" name="function"/>
                    </label>
                    <label>
                        <input placeholder="Status" name="status"/>
                    </label>
                    <label>
                        <input placeholder="Employed" name="employed"/>
                    </label>
                    <button className="addNewUser">Add New User</button>
                </div>
            </div>
        </div>
    )
} 

export default AddNewUser;