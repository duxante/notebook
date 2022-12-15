import "./userOverview.style.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
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

  console.log(userViewConfig, "user view config in UserOverview component");
  const handleClose = () => {
    setUserViewConfig({
        isVisible: false,
        name:"",
        position: "",
        about:"",
        status:"",
        employed:"",
      })
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
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            User CV
          </Typography>
          <p className="userOverview">Name: <span>{userViewConfig.name}</span></p>
          <p className="userOverview">Position: <span>{userViewConfig.position}</span></p>
          <p className="userOverview">Employed: <span>{userViewConfig.employed}</span></p>
          <p className="userOverview">Status: <span>{userViewConfig.status}</span></p>
          <p className="userOverview">About: <span>{userViewConfig.about}</span></p>
        </Box>
      </Modal>
    </div>
  );
}

export default UserOverview;