import MainHeading from "../../Common/MainHeading/mainHeading.component";
import "./addNewUser.style.css";
import Sidebar from "../../Common/Sidebar/sidebar.component";
import Button from "../../Common/ButtonFolder/button.component";


const AddNewUser = () => {
    return(
        <div className="holder-centralni-dio">
                <Sidebar />
            <div className="usersDashboard">

                <MainHeading mainHeadingTitle="Add New User" />

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
                    <Button buttonText="Add New User" />
                </div>
            </div>
        </div>
    )
} 

export default AddNewUser;