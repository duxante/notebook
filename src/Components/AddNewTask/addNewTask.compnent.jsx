import { useState } from "react";
import fire from "../../Utils/firebase.config";
import Button from "../../Common/ButtonFolder/button.component";
import Dashboard from "../../Common/DashboardFolder/dashboard.component";
import Sidebar from "../../Common/Sidebar/sidebar.component";
import "./addNewTask.style.css";
import Notification from "../../Common/NotificationFolder/notification.component";
import HolderCentralniDio from "../../Common/HolderCentralniDio/holderCentralniDio.component";
import TransitionsModal from "../../Common/PopUp/popUp.component";



const AddNewTask = () => {
    const [task, setTask] = useState({
        taskImage:"",
        taskPriority:"",
        taskName:"",
        taskDescription:"",
    });
    const [isOpen, setIsOpen] = useState(false);
    const [notificationConfig, setNotificationConfig] = useState({
        visible: false,
        severity: "",
        text: "",
    })

    const addTask = (e) => {
        e.preventDefault();
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitTask = (e) => {
        e.preventDefault();
        const db = fire.firestore();
        db.collection("tasks/").add({
            image: task.taskImage,
            priority: task.taskPriority,
            name: task.taskName,
            description: task.taskDescription,
        });
        setTask({
        taskImage:"",
        taskPriority:"",
        taskName:"",
        taskDescription:"",
        })
        setNotificationConfig({
            visible: true,
            severity: "success",
            text: "Task successfully created!",
        })
        setIsOpen(false);
    };

    const handleConfirmAddNewTask = () => {
        setIsOpen(true);

    }

    return(
        <>
        {notificationConfig.visible && <Notification 
            notificationConfig={notificationConfig}
            setNotificationConfig={setNotificationConfig}
        />
        }
        <TransitionsModal 
        title="Add new task?"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onClick={handleSubmitTask}
        />
        <HolderCentralniDio>
            <Sidebar />
                <Dashboard mainHeadingTitle="Add New Task">
                    <div className="addNewTaskDataInput">
                        <form className="addNewTaskForm">
                            <input value={task.taskImage} placeholder="Task Image" name="taskImage" onChange={addTask}/>
                        
                            <input value={task.taskPriority} placeholder="Task Priority" name="taskPriority" onChange={addTask}/>
                        
                            <input value={task.taskName} placeholder="Task Name" name="taskName" onChange={addTask}/>
                        
                            <input value={task.taskDescription} placeholder="Task Description" name="taskDescription" onChange={addTask}/>
                        </form>
                        <Button buttonText="Add New Task" onClick={handleConfirmAddNewTask}/>
                    </div>
                </Dashboard>
        </HolderCentralniDio>
        </>
    )
} 

export default AddNewTask;