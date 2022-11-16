import Sidebar from "../../Common/Sidebar/sidebar.component";
import "./tasks.style.css";
import Button from "../../Common/ButtonFolder/button.component";
import Dashboard from "../../Common/DashboardFolder/dashboard.component";
import { useEffect, useState } from "react";
import fire from "../../Utils/firebase.config";
import defaultImage from "../../imagesFolder/defaultImage.svg";
import HolderCentralniDio from "../../Common/HolderCentralniDio/holderCentralniDio.component";



const Tasks = () => {
    const [allTasks, setAllTasks] = useState([]);

    const OneTask = ({image, taskPriority, taskName, taskDescription}) => {
        return(
            <div className="taskCard">
                <img src={image.length !==0 ? image : defaultImage}/>

                {/* <h3 className="taskPriority">{taskPriority === "low" ? <div className="priorityLow">Low</div> : <div className="priorityHigh">High</div>}</h3> */}

                <span className={taskPriority === "low" ? "priorityLow" : "priorityHigh"}>{taskPriority}</span>

                <div className="nameAndDescription">
                <h2 className="taskName">{taskName}</h2>
                <p className="taskDescription">{taskDescription}</p>
                </div>
                <Button buttonText="View Task" customClassName='customStyle' />
            </div>
        )
    }

    const fetchTasks = async() => {
        const db = fire.firestore();
        const response = db.collection("tasks");
        const data = await response.get();
        const newTasks = data.docs.map((task) => {
            return task.data();
        });
        setAllTasks([...newTasks])
    }

    useEffect(() => {
        fetchTasks();
    }, []);

    return(
        <HolderCentralniDio>
            <Sidebar />
            <Dashboard mainHeadingTitle="Tasks">            
                <div className="titleAndTasks">
                    <div className="titleTasksList">
                        <h1>Tasks List</h1>
                    </div>

                    <div className="taskCards">
                        {allTasks.map(task => <OneTask
                            image={task.taskImage}
                            taskPriority={task.taskPriority}
                            taskName={task.taskName}
                            taskDescription={task.taskDescription}
                        />)}
                    </div>
                </div>
            </Dashboard>
        </HolderCentralniDio>
    )
}

export default Tasks;