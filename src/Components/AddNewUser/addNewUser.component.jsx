import "./addNewUser.style.css";
import Sidebar from "../../Common/Sidebar/sidebar.component";
import Button from "../../Common/ButtonFolder/button.component";
import Dashboard from "../../Common/DashboardFolder/dashboard.component";


const AddNewUser = () => {
    return(
        <div className="holder-centralni-dio">
                <Sidebar />
            <Dashboard mainHeadingTitle="Add New User">

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
            </Dashboard>
        </div>
    )
} 

export default AddNewUser;