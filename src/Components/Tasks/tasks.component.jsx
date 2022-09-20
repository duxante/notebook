import MainHeading from "../../Common/MainHeading/mainHeading.component";
import Sidebar from "../../Common/Sidebar/sidebar.component";
import "./tasks.style.css";
import ViewTaskButton from "../../Common/ViewTaskButton/viewTaskButton.component";


const Tasks = ({
    mainHeadingTitle,
}) => {

    let allTasks = [
        {
        image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29ya3xlbnwwfHwwfHw%3D&w=1000&q=80",
        taskNumber: "Task #1",
        taskName: "Posao",
        taskDescription: "Danas na poslu zaraditi hrpu jebenog novca onako, iz zajebancije."
        },
        {
        image: "https://preview.redd.it/bhflqxbwryh91.jpg?width=640&crop=smart&auto=webp&s=09c8a66406de54746621fe4b42623c9316aba9b8",
        taskNumber: "Task #2",
        taskName: "Napraviti ručak",
        taskDescription: "Kupiti meso i namirnice za ručak u lokalnom dućanu i pripremiti roštilj."            
        },
        {
        image: "https://zinginstruments.com/wp-content/uploads/couple-driving-car-at-sunset.jpg",
        taskNumber: "Task #3",
        taskName: "Pokupiti ženu s posla",
        taskDescription: "Nemoj zaboraviti pokupiti ženu s posla."            
        },
        {
        image: "https://thumbs.dreamstime.com/b/supermarket-cart-loaded-cardboard-boxes-sales-goods-concept-trade-commerce-online-shopping-high-delivery-order-134531493.jpg",
        taskNumber: "Task #4",
        taskName: "Shopping",
        taskDescription: "Poslije otići u shopping i kupiti hrpu nepotrebnih gluposti."            
        },
        {
        image: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ILADKEEIXMI6VAG72JFTLJLIVY.jpg&w=1200",
        taskNumber: "Task #5",
        taskName: "Trening",
        taskDescription: "Trening. Danas plyo, eksplozija, istrčavanja, finish."            
        },
        {
        image: "https://assets.entrepreneur.com/content/3x2/2000/20150708172005-coding-working-workspace-apple-macintosh.jpeg",
        taskNumber: "Task #6",
        taskName: "Učenje",
        taskDescription: "Odraditi domaću zadaću koju mi je Milorad poslao."            
        },
        {
        image: "https://www.smartsheet.com/sites/default/files/styles/media_thumbnail/public/ic-og-ResourcePlanning-FacebookLinkedIn.jpg",
        taskNumber: "Task #7",
        taskName: "Priprema za sutrašnji sastanak",
        taskDescription: "Odraditi plan, ponude i pripremu za sutrašnji sastanak i klijente iz Phonocara."            
        },
        {
        image: "https://faroutmagazine.co.uk/static/uploads/2022/01/How-dominance-of-Marvel-has-damaged-contemporary-cinema.jpg",
        taskNumber: "Task #8",
        taskName: "Novi Marvel",
        taskDescription: "Ne zaboravi podići karte za novi Marvelov film, sat vremena prije projekcije."            
        },
];

const OneTask = ({
    image, taskNumber, taskName, taskDescription
}) => {
    return(
        <div className="taskCard">
            <img src={image}/>
            <h3 className="taskNumber">{taskNumber}</h3>
            <h2 className="taskName">{taskName}</h2>
            <p className="taskDescription">{taskDescription}</p>
            <ViewTaskButton buttonText="View Task" />
        </div>
    )
}

    return(
        <div className="tasksHolder">
            <Sidebar />
            <div className="tasksForm">
                <MainHeading 
                mainHeadingTitle="Tasks"
                />            
                <div className="titleAndTasks">
                    <div className="titleTasksList">
                        <h1>Tasks List</h1>
                    </div>
                    <div className="taskCards">
                        {allTasks.map(functionName => <OneTask
                            image={functionName.image}
                            taskNumber={functionName.taskNumber}
                            taskName={functionName.taskName}
                            taskDescription={functionName.taskDescription}
                        />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tasks;