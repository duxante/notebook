import { useState } from "react";
import fire from "../../Utils/firebase.config";
import Button from "../../Common/ButtonFolder/button.component";
import Dashboard from "../../Common/DashboardFolder/dashboard.component";
import Sidebar from "../../Common/Sidebar/sidebar.component";
import "./addNewTask.style.css";
import Notification from "../../Common/NotificationFolder/notification.component";
import HolderCentralniDio from "../../Common/HolderCentralniDio/holderCentralniDio.component";
import TransitionsModal from "../../Common/PopUp/popUp.component";
import { TextField } from "@mui/material";
import * as yup from 'yup';
import { Formik } from "formik";



const initialAddNewTaskValues = {
    taskName:"",
    taskImage:"",
    taskPriority:"",
    taskDescription:"",
}

const addNewTaskScheme = yup.object().shape({
    taskName: yup.string().required("Task Name is required"),
    taskImage: yup.string().required("Task Image is required"),
    taskPriority: yup.string().required("Task Priority is required"),
    taskDescription: yup.string().required("Task Description is required"),
})

const AddNewTask = () => {
    const [modalConfig, setModalConfig] = useState({
        visible: false,
        values: null,
        submitProps: null
    });
    const [notificationConfig, setNotificationConfig] = useState({
        visible: false,
        severity: "",
        text: "",
    })

    const handleSubmitTask = (e) => {
        const { values } = modalConfig;
        const db = fire.firestore();
        db.collection("tasks/").add({
            image: values.taskImage,
            priority: values.taskPriority,
            name: values.taskName,
            description: values.taskDescription,
        });
        setModalConfig({
            visible: false,
            values: null,
            submitProps: null
        })
        setNotificationConfig({
            visible: true,
            severity: "success",
            text: "Task successfully created!",
        })
        modalConfig.submitProps.resetForm(); 
    };

    const handleConfirmAddNewTask = (values, onSubmitProps) => {
        setModalConfig({
            visible: true,
            values: values,
            submitProps: onSubmitProps,
        });

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
        isOpen={modalConfig.visible}
        setIsOpen={setModalConfig}
        onClick={handleSubmitTask}
        />
        <HolderCentralniDio>
            <Sidebar />
                <Dashboard mainHeadingTitle="Add New Task">
                    <div className="addNewTaskDataInput">
                        <Formik
                            onSubmit={handleConfirmAddNewTask}
                            initialValues={initialAddNewTaskValues}
                            validationSchema={addNewTaskScheme}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleBlur,
                                handleChange,
                                handleSubmit
                            }) => (
                                <form className="addNewTaskForm" onSubmit={handleSubmit}>
                                    <TextField 
                                    label="Task Image"
                                    name="taskImage"
                                    onBlur={handleBlur}
                                    value={values.taskImage}
                                    error={Boolean(touched.taskImage) && Boolean(errors.taskImage)}
                                    helperText={touched.taskImage && errors.taskImage}
                                    onChange={handleChange}
                                    />
                                    <TextField 
                                    label="Task Name"
                                    name="taskName"
                                    onBlur={handleBlur}
                                    value={values.taskName}
                                    error={Boolean(touched.taskName) && Boolean(errors.taskName)}
                                    helperText={touched.taskName && errors.taskName}
                                    onChange={handleChange}
                                    />
                                    <TextField 
                                    label="Task Priority"
                                    name="taskPriority"
                                    onBlur={handleBlur}
                                    value={values.taskPriority}
                                    error={Boolean(touched.taskPriority) && Boolean(errors.taskPriority)}
                                    helperText={touched.taskPriority && errors.taskPriority}
                                    onChange={handleChange}
                                    />
                                    <TextField 
                                    label="Task Description"
                                    name="taskDescription"
                                    onBlur={handleBlur}
                                    value={values.taskDescription}
                                    error={Boolean(touched.taskDescription) && Boolean(errors.taskDescription)}
                                    helperText={touched.taskDescription && errors.taskDescription}
                                    onChange={handleChange}
                                    />
                                    <Button buttonText="Add New Task" type="submit"/>
                                </form>
                            )}
                        </Formik>
                    </div>
                </Dashboard>
        </HolderCentralniDio>
        </>
    )
} 

export default AddNewTask;