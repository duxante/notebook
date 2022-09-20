import { useNavigate } from "react-router-dom";
import "./sidebar.style.css";

const Sidebar = () => {

    const navigate = useNavigate();

    return(
        <div class="sidebar">
            <div class="sidebar-upper">
                <div className="personalNotebook">
                    <button className="sidebarButton">    
                    <img src="https://freepikpsd.com/file/2019/10/icone-notebook-png-5-Transparent-Images.png"/>
                    <h1>Personal Notebook</h1>
                    </button>
                </div>
                <div class="mobile-sidebar">    
                    <div class="shortcuts">
                    <button onClick={() => navigate('/users')} className="sidebarButton">
                        <img src="https://www.iconpacks.net/icons/1/free-users-icon-267-thumb.png"/>
                        <h2>Users</h2>
                    </button>    
                    </div>
                    <div class="shortcuts">
                        <button onClick={() => navigate('/addNewUser')} className="sidebarButton">
                        <img src="https://www.freeiconspng.com/thumbs/account-icon/account-icon-17.png"/>
                        <h2>Add New User</h2>
                        </button>
                    </div>
                    <div class="shortcuts">
                        <button onClick={() => navigate('/addNewTask')} className="sidebarButton">
                        <img src="https://static.thenounproject.com/png/1868392-200.png"/>
                        <h2>Add New Task</h2>
                        </button>
                    </div>
                    <div class="shortcuts">
                        <button onClick={() => navigate('/tasks')} className="sidebarButton">
                        <img src="https://icons-for-free.com/download-icon-description+outline+problem+task+tasks+taskstroke+icon-1320168114572144822_256.ico"/>
                        <h2>Tasks</h2>
                        </button>
                    </div>
                    <div class="shortcuts">
                        <button onClick={() => navigate('/finishedTasks')} className="sidebarButton">
                        <img src="https://static.thenounproject.com/png/1596429-200.png"/>
                        <h2>Finished Tasks</h2>
                        </button>
                    </div>
                    <div class="shortcuts">
                        <button onClick={() => navigate('/deletedUsers')} className="sidebarButton">
                        <img src="https://cdn.iconscout.com/icon/free/png-256/close-3047864-2535292.png"/>
                        <h2>Deleted Users</h2>
                        </button>
                    </div>
                    <div class="shortcuts">
                        <button onClick={() => navigate('/mainScreen')} className="sidebarButton">
                        <img Link to='/' src="https://icons-for-free.com/download-icon-bx+log+out-1325051892133132707_256.ico"/>
                        <h2>Log Out</h2>
                        </button>
                    </div>
                </div>
                <div className="developedByDux">
                    <h4>DEVELOPED BY DUX</h4>
                </div>    
            </div>
        </div>
    )
}

export default Sidebar;