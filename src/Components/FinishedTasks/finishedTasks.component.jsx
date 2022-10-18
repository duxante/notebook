import "./finishedTasks.style.css";
import Sidebar from "../../Common/Sidebar/sidebar.component";
import MainHeading from "../../Common/MainHeading/mainHeading.component";


const FinishedTasks = ({
    mainHeadingTitle
}) => {

    return(
        <div className="holder-centralni-dio">
        <Sidebar />
        <div className="usersDashboard">
            <MainHeading 
            mainHeadingTitle="Finished Tasks"
            />            
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
        </div>
    </div>
    )
}

export default FinishedTasks;