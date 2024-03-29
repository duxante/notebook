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
import AddNewUser from './Components/AddNewUser/addNewUser.component';
import AddNewTask from './Components/AddNewTask/addNewTask.compnent';
import Tasks from './Components/Tasks/tasks.component';
import FinishedTasks from './Components/FinishedTasks/finishedTasks.component';
import DeletedUsers from './Components/DeletedUsers/deletedUsers.component';
import LoginWindow from './Components/LoginWindow/loginWindow.component';
import SignUp from './Components/SignUp/signUp.component';
import HolderCentralniDio from './Common/HolderCentralniDio/holderCentralniDio.component';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/users' element={<Users />} />
        <Route path='/addNewUser' element={<AddNewUser />} />
        <Route path='/addNewTask' element={<AddNewTask />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/finishedTasks' element={<FinishedTasks />} />
        <Route path='/deletedUsers' element={<DeletedUsers />} />
        <Route path='/login' element={<LoginWindow />} />
        <Route path='/signUp' element={<SignUp />}/>
        <Route path='/holderCentralniDio' element={<HolderCentralniDio />} />
      </Routes>
  </BrowserRouter>
); 