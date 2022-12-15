import "./userOverview.style.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const UserOverview = ({userViewConfig, setUserViewConfig}) => {

  const handleClose = () => {
    setUserViewConfig({
        isVisible: false,
        name:"",
        position: "",
        about:"",
        status:"",
        employed:"",
      });
  };

  return (
    <div>
      <Modal
        keepMounted
        open={userViewConfig.isVisible}
        onClose={handleClose} 
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <span className="userOverviewX" onClick={handleClose}>X</span>  
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            <h2>User Info</h2>
          </Typography>
          <p className="userOverview"><b>Name:</b> <span>{userViewConfig.name}</span></p>
          <p className="userOverview"><b>Position:</b> <span>{userViewConfig.position}</span></p>
          <p className="userOverview"><b>Employed:</b> <span>{userViewConfig.employed}</span></p>
          <p className="userOverview"><b>Status:</b> <span>{userViewConfig.status}</span></p>
          <p className="userOverview"><b>About:</b> <span>{userViewConfig.about}</span></p>
          <button className="closeOverview" onClick={handleClose}>Close</button>
        </Box>
      </Modal>
    </div>
  );
}

export default UserOverview;