import React, { useEffect, useState } from "react";
import fire from "../../Utils/firebase.config"
import "./finishedTasks.style.css";
import Sidebar from "../../Common/Sidebar/sidebar.component";
import Dashboard from "../../Common/DashboardFolder/dashboard.component";
import HolderCentralniDio from "../../Common/HolderCentralniDio/holderCentralniDio.component";
import Notification from "../../Common/NotificationFolder/notification.component";




const FinishedTasks = () => {
    const [finishedTasks, setFinishedTasks] = useState([]);
    const [notificationConfig, setNotificationConfig] = useState({
        visible: false,
        severity: "",
        text: "",
    });

    const fetchFinishedTasks = async() => {
        const db = fire.firestore();
        const response = db.collection("finishedTasks");
        const data = await response.get();
        const newFinishedTasks = data.docs.map((finishedTask) => {
            const finishedTaskData = finishedTask.data();
            const singleFinishedTask = {
                name: finishedTaskData.name,
                id: finishedTask.id,
            };
            return singleFinishedTask;
        });
        setFinishedTasks([...newFinishedTasks]);
    };

    useEffect(() => {
        fetchFinishedTasks();
    }, []);

    const handleRestoreFinishedTask = async (restoreTask) => {
        const db = fire.firestore();
        db.collection("tasks/").add({
            name: restoreTask.name,
            image: restoreTask.image,
            description: restoreTask.description,
            id: restoreTask.id,
            priority: restoreTask.priority,
        });
        console.log(restoreTask);
        await db.collection("finishedTasks").doc(restoreTask.id).delete();
        fetchFinishedTasks();
        setNotificationConfig({
            visible: true,
            severity: "success",
            text: "Task successfully restored!",
        });
    }

    const handleDeleteFinishedTask = async (finishedTask) => {
        const db = fire.firestore();
        await db.collection("finishedTasks").doc(finishedTask.id).delete();
        fetchFinishedTasks();
        setNotificationConfig({
            visible: true,
            severity: "error",
            text: "Task successfully deleted!"
        });
    };

    return(
        <>
            {notificationConfig.visible && 
                <Notification         
                    notificationConfig={notificationConfig}
                    setNotificationConfig={setNotificationConfig}
                />
            }
            <HolderCentralniDio>
            <Sidebar />
                <Dashboard mainHeadingTitle="Finished Tasks">            
                    <div className="titleAndFinishedTasks">
                        <div className="titleFinishedTasksList">
                            <h1>List of finished tasks</h1>
                        </div>
                        <div className="finishedTaskCards">
                            {finishedTasks.map((finishedTask, index, restoreTask) => {
                                return(
                            <div key={index} className="oneFinishedTask">
                                <p key={Math.random()}>{finishedTask.name}</p>
                                <p key={Math.random()}>{finishedTask.priority}</p>  
                                <p key={Math.random()}>{finishedTask.image}</p>
                                <p key={Math.random()}>{finishedTask.description}</p>
                                <div>
                                <button key={Math.random()} className="restoreButton" onClick={() => handleRestoreFinishedTask(restoreTask)}>Restore Task</button>
                                <span key={Math.random()} className="closeIt" onClick={() => handleDeleteFinishedTask(finishedTask)}>X</span>
                                </div>
                            </div>
                            )
                            })}
                        </div>
                    </div>
                </Dashboard>
            </HolderCentralniDio>
        </>                
    )
}

export default FinishedTasks;