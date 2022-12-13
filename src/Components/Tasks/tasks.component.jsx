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
import OverviewModal from "../../Common/OverviewModal/overviewModal.component";



const Tasks = () => {
    const [allTasks, setAllTasks] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [openViewModal, setOpenViewModal] = useState(false);
    const [taskForFinish, setTaskForFinish] = useState(null);
    const [openTaskAndView, setOpenTaskAndView] = useState(null);
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

    const handleFinishTask = async () => {
             const db = fire.firestore();
            db.collection("finishedTasks/").add({
                image: taskForFinish.image,
                priority: taskForFinish.priority,
                name: taskForFinish.name,
                description: taskForFinish.description,               
            });
            await db.collection("tasks").doc(taskForFinish.id).delete();
            fetchTasks();
            setNotificationConfig({
                visible: true,
                severity: "success",
                text: "Successfully moved to Finished Tasks",
            })
            setIsOpen(false);
        }

    const handleOpenTaskAndView =async () => {
        const db = fire.firestore();
        db.collection("tasks/")
    }


    const handleOpenFinishTaskConfirm = (finishThisOne) => {
        setIsOpen(true);
        setTaskForFinish(finishThisOne);
    }

    function capitalizeFirstLetter(string) {
        let stringSetLowerCase = string.toLowerCase();
        return stringSetLowerCase.charAt(0).toUpperCase() + stringSetLowerCase.slice(1);
    }

    const handleOpenViewTask = (viewThisOne) => {
        setOpenViewModal(true);
        setOpenTaskAndView(viewThisOne)
    }

    const OneTask = ({image, priority, name, description, completeTask}) => {
        return(
            <div className="taskCard">
                <img src={image?.length !== 0 ? image : defaultImage}/>
                <span className={priority.toLowerCase() === "low" ? "priorityLow" : "priorityHigh"}>{capitalizeFirstLetter(priority)}</span>

                <div className="nameAndDescription">
                <h2 className="taskName">{name}</h2>
                <p className="taskDescription">{description}</p>
                </div>
                <Button onClick={() => handleOpenViewTask(completeTask)} buttonText="View Task" customClassName='customStyle' />
                <Button onClick={() => handleOpenFinishTaskConfirm(completeTask)} buttonText="Finish Task" customClassName="finishTaskButtonStyle" /> 
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

            <OverviewModal 
            openViewModal={openViewModal}
            setOpenViewModal={setOpenViewModal}
            />

            <TransitionsModal 
            title="Do you want to finish task?"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            onClick={handleFinishTask}
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