import React, { useEffect, useState } from "react";
import fire from "../../Utils/firebase.config"
import "./finishedTasks.style.css";
import Sidebar from "../../Common/Sidebar/sidebar.component";
import Dashboard from "../../Common/DashboardFolder/dashboard.component";
import HolderCentralniDio from "../../Common/HolderCentralniDio/holderCentralniDio.component";
import Notification from "../../Common/NotificationFolder/notification.component";
import Button from "../../Common/ButtonFolder/button.component";
import defaultImage from "../../imagesFolder/defaultImage.svg";
import TransitionsModal from "../../Common/PopUp/popUp.component";
import OverviewModal from "../../Common/OverviewModal/overviewModal.component";

const FinishedTasks = () => {
    const [finishedTasks, setFinishedTasks] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [restoreFinishedTask, setRestoreFinishedTask] = useState(null);
    const [openViewModal, setOpenViewModal] = useState({
        modalOpen: false,
        name: "",
        image: "",
        description: "",
    });
    const [notificationConfig, setNotificationConfig] = useState({
        visible: false,
        severity: "",
        text: "",
    });
    const notebookOwner = JSON.parse(localStorage.getItem("userData"));

    const fetchFinishedTasks = async() => {
        const db = fire.firestore();
        const response = db.collection("finishedTasks");
        const data = await response.get();
        const newFinishedTasks = data.docs.map((finishedTask) => {
            const finishedTaskData = finishedTask.data();
            const singleFinishedTask = {
                name: finishedTaskData.name,
                description: finishedTaskData.description,
                priority: finishedTaskData.priority,
                image: finishedTaskData.image,
                id: finishedTask.id,
            };
            return singleFinishedTask;
        });
        setFinishedTasks([...newFinishedTasks]);
    };

    useEffect(() => {
        fetchFinishedTasks();
    }, []);

    const handleViewFinishedTask = (viewFinishedTask) => {
        setOpenViewModal({
            modalOpen: true,
            name: viewFinishedTask.name,
            image: viewFinishedTask.image,
            description: viewFinishedTask.description,
        });
    }

    const OneFinishedTask = ({name, description, image, id, priority, completeTask}) => {
        return(
            <div className="finishedTaskCard">
                <span className="closeIt" onClick={() => handleDeleteFinishedTask(id)}>X</span>
                <img src={image?.length !== 0 ? image : defaultImage}/>
                <span className={priority === "low" ? "finishedTaskPriorityLow" : "finishedTaskPriorityHigh"}>{priority}</span>
                <div className="finishedTaskNameAndDescription">
                    <h2 className="finishedTaskName">{name}</h2>
                    <p className="finishedTaskDescription">{description}</p>
                </div>
                <Button onClick={() => handleViewFinishedTask(completeTask)} buttonText="View Task" customClassName="customStyle" />
                {notebookOwner.role === "superAdmin" &&
                <Button onClick={() => handleOpenRestoreTaskConfirm(completeTask)} buttonText="Restore Task" customClassName="restoreFinishedTaskButtonStyle" />
                }
            </div>
        )
    }

    const handleDeleteFinishedTask = async (finishedTaskId) => {
        const db = fire.firestore();
        await db.collection("finishedTasks").doc(finishedTaskId).delete();
        fetchFinishedTasks();
        setNotificationConfig({
            visible: true,
            severity: "error",
            text: "Task successfully deleted!"
        });
    };


    const handleRestoreFinishedTask = async () => {
        const db = fire.firestore();
        db.collection("tasks/").add({
            name: restoreFinishedTask.name,
            image: restoreFinishedTask.image,
            description: restoreFinishedTask.description,
            priority: restoreFinishedTask.priority,
        });
        await db.collection("finishedTasks").doc(restoreFinishedTask.id).delete();
        fetchFinishedTasks();
        setNotificationConfig({
            visible: true,
            severity: "success",
            text: "Task successfully restored!",
        });
        setIsOpen(false);
    }

    const handleOpenRestoreTaskConfirm = (taskToRestore) => {
        setIsOpen(true);
        setRestoreFinishedTask(taskToRestore);
    }

    return(
        <>
            {notificationConfig.visible && 
                <Notification         
                    notificationConfig={notificationConfig}
                    setNotificationConfig={setNotificationConfig}
                />
            }
            {openViewModal.modalOpen &&
                <OverviewModal 
                    openViewModal={openViewModal}
                    setOpenViewModal={setOpenViewModal}
                />
            }
            <TransitionsModal
            title="Are you sure you want to restore task?"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            onClick={handleRestoreFinishedTask}
            />
            <HolderCentralniDio>
            <Sidebar />
                <Dashboard mainHeadingTitle="Finished Tasks">            
                    <div className="titleAndFinishedTasks">
                        <div className="titleFinishedTasksList">
                            <h1>List of finished tasks</h1>
                        </div>
                        <div className="finishedTaskCards">
                        {finishedTasks.map(finishedTask => <OneFinishedTask
                                completeTask={finishedTask}
                                image={finishedTask.image}
                                priority={finishedTask.priority}
                                name={finishedTask.name}
                                description={finishedTask.description}
                                id={finishedTask.id}
                            />)}
                        </div>
                    </div>
                </Dashboard>
            </HolderCentralniDio>
        </>                
    )
}

export default FinishedTasks;