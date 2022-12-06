import "./popUp.style.css";
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  boxShadow: 24,
  p: 4,
};

const TransitionsModal = ({title, subtitle, isOpen, setIsOpen, onClick}) => {

  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            <h2 className="ParagraphTitle">
              {title}
            </h2>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {subtitle}
            </Typography>
            <div className="confirmDeclineButtons">
                <button className="confirmButton" onClick={onClick}>Confirm</button>
                <button className="declineButton" onClick={handleClose}>Decline</button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default TransitionsModal;