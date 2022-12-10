import "./overviewModal.style.css";
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const OverviewModal = ({openViewModal, setOpenViewModal, name, image, priority, description}) => {

  const handleCloseOverviewModal = () => {
    setOpenViewModal(false);
  };

  return (
    <div>
      <Dialog
        openViewModal={openViewModal}
        onClose={handleCloseOverviewModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <img src={image} />
        <DialogTitle id="alert-dialog-title">
          <h2 className="viewTaskName">{name}</h2>
        </DialogTitle>
        
        <DialogContent>
            <span className="confirmX" onClick={handleCloseOverviewModal}>X</span>
            <span>{priority}</span>  
            <DialogContentText id="alert-dialog-description">
            {description}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className="closeButton" onClick={handleCloseOverviewModal}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default OverviewModal;