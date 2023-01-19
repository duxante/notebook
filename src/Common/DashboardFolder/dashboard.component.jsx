import MainHeading from "../MainHeading/mainHeading.component";
import "./dashboard.style.css";

const Dashboard = ({children, mainHeadingTitle}) => {
    return(
        <div className="globalDashboard">
            <div className="tablesHolder">
                <MainHeading mainHeadingTitle={mainHeadingTitle} />
                {children}
            </div>
        </div>
    )
}

export default Dashboard;