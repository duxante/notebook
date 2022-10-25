import "./finishedTasks.style.css";
import Sidebar from "../../Common/Sidebar/sidebar.component";
import Dashboard from "../../Common/DashboardFolder/dashboard.component";


const FinishedTasks = () => {

    return(
        <div className="holder-centralni-dio">
        <Sidebar />
        <Dashboard mainHeadingTitle="Finished Tasks">            
            <div className="titleAndFinishedTasks">
                <div className="titleFinishedTasksList">
                    <h1>List of finished tasks</h1>
                </div>
                <div className="finishedTaskCards">
                    <div className="oneFinishedTask">
                        <p>Lorem ipsum dolor, sit amet. Task je gotov! :D</p>
                        <span className="closeIt">X</span>
                    </div>
                    <div className="oneFinishedTask">
                        <p>Lorem ipsum dolor, sit amet. Task je gotov! :D</p>
                        <span className="closeIt">X</span>
                    </div>
                    <div className="oneFinishedTask">
                        <p>Lorem ipsum dolor, sit amet. Task je gotov! :D</p>
                        <span className="closeIt">X</span>
                    </div>
                    <div className="oneFinishedTask">
                        <p>Lorem ipsum dolor, sit amet. Task je gotov! :D</p>
                        <span className="closeIt">X</span>
                    </div>
                    <div className="oneFinishedTask">
                        <p>Lorem ipsum dolor, sit amet. Task je gotov! :D</p>
                        <span className="closeIt">X</span>
                    </div>
                    <div className="oneFinishedTask">
                        <p>Lorem ipsum dolor, sit amet. Task je gotov! :D</p>
                        <span className="closeIt">X</span>
                    </div>
                    <div className="oneFinishedTask">
                        <p>Lorem ipsum dolor, sit amet. Task je gotov! :D</p>
                        <span className="closeIt">X</span>
                    </div>
                    <div className="oneFinishedTask">
                        <p>Lorem ipsum dolor, sit amet. Task je gotov! :D</p>
                        <span className="closeIt">X</span>
                    </div>
                </div>
            </div>
        </Dashboard>
    </div>
    )
}

export default FinishedTasks;