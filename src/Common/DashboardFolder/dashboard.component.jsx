import MainHeading from "../MainHeading/mainHeading.component";
import "./dashboard.style.css";

const Dashboard = ({children, mainHeadingTitle}) => {
    return(
        <div className="globalDashboard">
            <MainHeading mainHeadingTitle={mainHeadingTitle} />
            {children}
        </div>
    )
}

export default Dashboard;