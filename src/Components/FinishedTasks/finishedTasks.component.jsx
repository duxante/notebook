import React, { useEffect, useState } from "react";
import fire from "../../Utils/firebase.config"
import "./finishedTasks.style.css";
import Sidebar from "../../Common/Sidebar/sidebar.component";
import Dashboard from "../../Common/DashboardFolder/dashboard.component";
import HolderCentralniDio from "../../Common/HolderCentralniDio/holderCentralniDio.component";




const FinishedTasks = () => {
    const [finishedTasks, setFinishedTasks] = useState([]);

    const fetchFinishedTasks = async() => {
        const db = fire.firestore();
        const response = db.collection("finishedTasks");
        const data = await response.get();
        const newFinishedTasks = data.docs.map((finishedTask) => {
            const finishedTaskData = finishedTask.data();
            const singleFinishedTask = {
                description: finishedTaskData.description,
                name: finishedTaskData.name,
                priority: finishedTaskData.priority,
                image: finishedTaskData.image,
                id: finishedTask.id,
            }
            return singleFinishedTask;
        });
        setFinishedTasks([...newFinishedTasks]);
    };

    useEffect(() => {
        fetchFinishedTasks();
    }, []);

    const handleDeleteFinishedTask = async (finishedTask) => {
        const db = fire.firestore();
        await db.collection("finishedTasks").doc(finishedTask.id).delete();
        fetchFinishedTasks();
    }

    return(
        <HolderCentralniDio>
        <Sidebar />
            <Dashboard mainHeadingTitle="Finished Tasks">            
                <div className="titleAndFinishedTasks">
                    <div className="titleFinishedTasksList">
                        <h1>List of finished tasks</h1>
                    </div>
                    <div className="finishedTaskCards">
                        {finishedTasks.map((finishedTask, index) => {
                            return(
                        <div key={index} className="oneFinishedTask">
                            <p key={Math.random()}>{finishedTask.description}</p>
                            <p key={Math.random()}>{finishedTask.name}</p>  
                            <p key={Math.random()}>{finishedTask.priority}</p>
                            <p key={Math.random()}>{finishedTask.image}</p>
                            <span key={Math.random()} className="closeIt" onClick={() => handleDeleteFinishedTask(finishedTask)}>X</span>
                        </div>
                        )
                        })}
                    </div>
                </div>
            </Dashboard>
        </HolderCentralniDio>
    )
}

export default FinishedTasks;