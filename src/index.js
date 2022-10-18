import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import App from './App';
import Users from './Components/Users/users.component';
import MainScreen from './Components/MainScreen/mainScreen.component';
import AddNewUser from './Components/AddNewUser/addNewUser.component';
import AddNewTask from './Components/AddNewTask/addNewTask.compnent';
import Sidebar from './Common/Sidebar/sidebar.component';
import Tasks from './Components/Tasks/tasks.component';
import FinishedTasks from './Components/FinishedTasks/finishedTasks.component';
import DeletedUsers from './Components/DeletedUsers/deletedUsers.component';
import LoginWindow from './Components/LoginWindow/loginWindow.component';
import SignUp from './Components/SignUp/signUp.component';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path='/notebook' element={<App />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users' element={<Users />} />
        <Route path='/addNewUser' element={<AddNewUser />} />
        <Route path='/addNewTask' element={<AddNewTask />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/finishedTasks' element={<FinishedTasks />} />
        <Route path='/deletedUsers' element={<DeletedUsers />} />
        <Route path='/login' element={<LoginWindow />} />
        <Route path='/signUp' element={<SignUp />}/>
      </Routes>
  </BrowserRouter>
); 