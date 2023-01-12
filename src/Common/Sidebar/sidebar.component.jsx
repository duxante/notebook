import { useNavigate } from "react-router-dom";
import "./sidebar.style.css";

const Sidebar = () => {

    const navigate = useNavigate();
    const role = localStorage.getItem("role");

    return(
        <div className="sidebar">
            
                <div className="personalNotebook">
                    <div className="sidebarButton">    
                    <img src="https://freepikpsd.com/file/2019/10/icone-notebook-png-5-Transparent-Images.png"/>
                    <p>Personal notebook</p>
                    </div>
                </div>
                <div className="mobile-sidebar">    
                    <div className="shortcuts">
                    <div onClick={() => navigate('/users')} className="sidebarButton">
                        <img src="https://www.iconpacks.net/icons/1/free-users-icon-267-thumb.png"/>
                        <h2>Users</h2>
                    </div>    
                    </div>
                    {role === "superAdmin" &&
                    <>
                    <div className="shortcuts">
                    <div onClick={() => navigate('/addNewUser')} className="sidebarButton">
                        <img src="https://www.freeiconspng.com/thumbs/account-icon/account-icon-17.png"/>
                        <h2>Add New User</h2>
                    </div>
                    </div>
                    <div className="shortcuts">
                        <div onClick={() => navigate('/addNewTask')} className="sidebarButton">
                        <img src="https://static.thenounproject.com/png/1868392-200.png"/>
                        <h2>Add New Task</h2>
                        </div>
                    </div>
                    </>
                    }
                    <div className="shortcuts">
                        <div onClick={() => navigate('/tasks')} className="sidebarButton">
                        <img src="https://icons-for-free.com/download-icon-description+outline+problem+task+tasks+taskstroke+icon-1320168114572144822_256.ico"/>
                        <h2>Tasks</h2>
                        </div>
                    </div>
                    <div className="shortcuts">
                        <div onClick={() => navigate('/finishedTasks')} className="sidebarButton">
                        <img src="https://static.thenounproject.com/png/1596429-200.png"/>
                        <h2>Finished Tasks</h2>
                        </div>
                    </div>
                    <div className="shortcuts">
                        <div onClick={() => navigate('/deletedUsers')} className="sidebarButton">
                        <img src="https://cdn.iconscout.com/icon/free/png-256/close-3047864-2535292.png"/>
                        <h2>Deleted Users</h2>
                        </div>
                    </div>
                    <div className="shortcuts">
                        <div onClick={() => navigate('/notebook')} className="sidebarButton">
                        <img link to='/' src="https://icons-for-free.com/download-icon-bx+log+out-1325051892133132707_256.ico"/>
                        <h2>Log Out</h2>
                        </div>
                    </div>
                </div>
                <div className="developedByDux">
                    <h4>DEVELOPED BY DUX</h4>
                </div>   
        </div>
    )
}

export default Sidebar;