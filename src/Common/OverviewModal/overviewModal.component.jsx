import "./overviewModal.style.css";
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const OverviewModal = ({openViewModal, setOpenViewModal}) => {

  const handleCloseOverviewModal = () => {
    setOpenViewModal({
        modalOpen: false,
        name: "",
        image: "",
        description: "",
    });
  };

  return (
    <div>
      <Dialog
        open={openViewModal.modalOpen}
        onClose={handleCloseOverviewModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <img src={openViewModal.image} />
        <DialogTitle id="alert-dialog-title">
          {openViewModal.name}
        </DialogTitle>
        
        <DialogContent>
            <span className="confirmX" onClick={handleCloseOverviewModal}>X</span>
            <DialogContentText id="alert-dialog-description">
            {openViewModal.description}
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