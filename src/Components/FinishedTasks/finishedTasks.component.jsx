import { useEffect, useState } from "react";
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
                description: finishedTaskData.finishedTaskDescription,
                name: finishedTaskData.finishedTaskName,
                priority: finishedTaskData.finishedTaskPriority,
                image: finishedTaskData.finishedTaskImage,
                id: finishedTaskData.id,
            }
            return singleFinishedTask;
        });
        setFinishedTasks([...newFinishedTasks]);
    };

    useEffect(() => {
        fetchFinishedTasks();
    }, []);

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
                            <span className="closeIt">X</span>
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