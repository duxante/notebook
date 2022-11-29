import { useEffect, useState } from "react";
import fire from "../../Utils/firebase.config";
import "./tasks.style.css";
import Sidebar from "../../Common/Sidebar/sidebar.component";
import Button from "../../Common/ButtonFolder/button.component";
import Dashboard from "../../Common/DashboardFolder/dashboard.component";
import HolderCentralniDio from "../../Common/HolderCentralniDio/holderCentralniDio.component";
import Notification from "../../Common/NotificationFolder/notification.component";
import defaultImage from "../../imagesFolder/defaultImage.svg";
import TransitionsModal from "../../Common/PopUp/popUp.component";



const Tasks = () => {
    const [allTasks, setAllTasks] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [notificationConfig, setNotificationConfig] = useState({
        visible: false,
        severity: "",
        text: "",
    })

    const fetchTasks = async() => {
        const db = fire.firestore();
        const response = db.collection("tasks");
        const data = await response.get();
        const newTasks = data.docs.map((task) => {
            const taskData = task.data();
            const singleTaskData = {
                description: taskData.description,
                image: taskData.image,
                priority: taskData.priority,
                name: taskData.name,
                id: task.id,
            }
             return singleTaskData;
        });
        setAllTasks([...newTasks])
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const handleFinishTask = async (completeTask) => {
                setIsModalVisible(true);
    /*         const db = fire.firestore();
            db.collection("finishedTasks/").add({
                image: completeTask.image,
                priority: completeTask.priority,
                name: completeTask.name,
                description: completeTask.description,               
            });
            await db.collection("tasks").doc(completeTask.id).delete();
            fetchTasks();
            setNotificationConfig({
                visible: true,
                severity: "success",
                text: "Successfully moved to Finished Tasks",
            }) */
    }

    const OneTask = ({image, priority, name, description, id, completeTask}) => {
        return(
            <div className="taskCard">
                <img src={image?.length !== 0 ? image : defaultImage}/>
                <span className={priority === "low" ? "priorityLow" : "priorityHigh"}>{priority}</span>

                <div className="nameAndDescription">
                <h2 className="taskName">{name}</h2>
                <p className="taskDescription">{description}</p>
                </div>
                <Button buttonText="View Task" customClassName='customStyle' />
                <Button onClick={() => handleFinishTask(completeTask)} buttonText="Finish Task" customClassName="finishTaskButtonStyle" /> 
            </div>
        )
    }

    return(
        <>
            {notificationConfig.visible && 
                <Notification 
                    notificationConfig={notificationConfig}
                    setNotificationConfig={setNotificationConfig}
                />
            }

            <TransitionsModal 
            title="Do you want to finish task?"
            isOpen={isModalVisible}
            />
            
            <HolderCentralniDio>
                <Sidebar />
                <Dashboard mainHeadingTitle="Tasks">            
                    <div className="titleAndTasks">
                        <div className="titleTasksList">
                            <h1>Tasks List</h1>
                        </div>

                        <div className="taskCards">
                            {allTasks.map(task => <OneTask
                                completeTask={task}
                                image={task.image}
                                priority={task.priority}
                                name={task.name}
                                description={task.description}
                                id={task.id}
                            />)}
                        </div>
                    </div>
                </Dashboard>
            </HolderCentralniDio>
        </>
    )
}

export default Tasks;