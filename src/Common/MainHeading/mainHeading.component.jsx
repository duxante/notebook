import "./mainHeading.style.css";

const MainHeading = ({
    mainHeadingTitle
}) => {
    return(
        <div className="mainHeadingTitle">
            <h1>{mainHeadingTitle}</h1>
        </div>
    )
}

export default MainHeading;