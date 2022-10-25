import Button from "../../Common/ButtonFolder/button.component";
import Dashboard from "../../Common/DashboardFolder/dashboard.component";
import Sidebar from "../../Common/Sidebar/sidebar.component";
import "./addNewTask.style.css";

const AddNewTask = () => {
    return(
        <div className="holder-centralni-dio">
                <Sidebar />
            <Dashboard mainHeadingTitle="Add New Task">

                <div className="addNewTaskDataInput">
                    <label>
                        <input placeholder="Task Name" name="taskName"/>
                    </label>
                    <label>
                        <input placeholder="Task Priority" name="taskPriority"/>
                    </label>
                    <label>
                        <input placeholder="Task Description" name="taskDescription"/>
                    </label>
                    <label>
                        <input placeholder="Task Assigned To" name="taskAssignedTo"/>
                    </label>
                    <Button buttonText="Add New Task"/>
                </div>
            </Dashboard>
        </div>
    )
} 

export default AddNewTask;