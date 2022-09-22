import MainHeading from "../../Common/MainHeading/mainHeading.component";
import Sidebar from "../../Common/Sidebar/sidebar.component";
import "./addNewTask.style.css";

const AddNewTask = ({
    mainHeadingTitle,
}) => {
    return(
        <div className="addNewTaskHolder">
                <Sidebar />
            <div className="addNewTaskForm">
                
                <MainHeading
                mainHeadingTitle="Add New Task"
                />

                <div className="addNewTaskDataInput">
                    <label>
                        <input placeholder="Task name" name="taskName"/>
                    </label>
                    <label>
                        <input placeholder="Task Priority" name="taskPriority"/>
                    </label>
                    <label>
                        <input placeholder="Task Description" name="taskDescription"/>
                    </label>
                    <button className="addNewTask">Add New Task 1</button>
                </div>
            </div>
        </div>
    )
} 

export default AddNewTask;