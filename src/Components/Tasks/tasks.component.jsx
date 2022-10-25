import MainHeading from "../../Common/MainHeading/mainHeading.component";
import Sidebar from "../../Common/Sidebar/sidebar.component";
import "./tasks.style.css";
import ViewTaskButton from "../../Common/ViewTaskButton/viewTaskButton.component";
import Button from "../../Common/ButtonFolder/button.component";


const Tasks = () => {

    let allTasks = [
        {
        image: "https://image.made-in-china.com/2f0j00qULYKwAJCtra/Simple-Wooden-Stylish-Office-Reception-Desk-Public-Front-Desk.jpg",
        taskNumber: "Task #1",
        taskName: "Posao",
        taskDescription: "Danas na poslu zaraditi hrpu jebenog novca onako, iz zajebancije."
        },
        {
        image: "https://assets.kansascitysteaks.com/dyn-images/pdp_hero/Ribeye_-_grilled_-_S-9ddcfb50325e18042116237659fdbf78.jpg",
        taskNumber: "Task #2",
        taskName: "Napraviti ručak",
        taskDescription: "Kupiti meso i namirnice za ručak u lokalnom dućanu i pripremiti roštilj."            
        },
        {
        image: "https://as2.ftcdn.net/v2/jpg/02/56/20/09/1000_F_256200947_toPYVmplu5YpFeVkQv00kPX7GoiFCt3v.jpg",
        taskNumber: "Task #3",
        taskName: "Pokupiti ženu s posla",
        taskDescription: "Nemoj zaboraviti pokupiti ženu s posla."            
        },
        {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7fFb7xU2a0pPAT3pOHvJYXh76z7o8ZNFliA&usqp=CAU",
        taskNumber: "Task #4",
        taskName: "Shopping",
        taskDescription: "Poslije otići u shopping i kupiti hrpu nepotrebnih gluposti."            
        },
        {
        image: "https://110percent.co.uk/wp-content/uploads/2017/04/The-Workhouse-Gym-1000x1000-3.jpg",
        taskNumber: "Task #5",
        taskName: "Trening",
        taskDescription: "Trening. Danas plyo, eksplozija, istrčavanja, finish."            
        },
        {
        image: "https://plus.unsplash.com/premium_photo-1661378451904-75b44d55a216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wJTIwcGlua3xlbnwwfHwwfHw%3D&w=1000&q=80g",
        taskNumber: "Task #6",
        taskName: "Učenje",
        taskDescription: "Odraditi domaću zadaću koju mi je Milorad poslao."            
        },
        {
        image: "https://media.officedepot.com/image/upload/f_auto,q_auto/coremedia/resource/image/141260/portrait_ratio1x1/1000/1000/18f8e3606ece974a75c72c9fb276e045/no/last-minute-presentation-no-problem.jpg",
        taskNumber: "Task #7",
        taskName: "Priprema za sastanak",
        taskDescription: "Plan, ponude i priprema za sastanak."            
        },
        {
        image: "https://m.media-amazon.com/images/M/MV5BNDY2NzQ3MGUtNTQ0NS00ZWNjLWE2MTAtZjI3MGQ3YjE3MWI3XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg",
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
            <Button buttonText="View Task" />
        </div>
    )
}

    return(
        <div className="holder-centralni-dio">
            <Sidebar />
            <div className="usersDashboard">
                <MainHeading mainHeadingTitle="Tasks" />            
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