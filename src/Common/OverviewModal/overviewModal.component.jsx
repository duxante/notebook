import "./overviewModal.style.css";
import * as React from 'react';
import Button from "../ButtonFolder/button.component";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import defaultImage from "../../imagesFolder/defaultImage.svg";

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
        <img src={openViewModal.image.length !== 0 ? openViewModal.image : defaultImage} />
        <DialogTitle id="alert-dialog-title">
          {openViewModal.name}
        </DialogTitle>
        
        <DialogContent>
            <span className="confirmX" onClick={handleCloseOverviewModal}>X</span>
            <DialogContentText id="alert-dialog-description">
                {openViewModal.description.length !==0 ? openViewModal.description : "No description provided."}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button customClassName="closeButton" buttonText="Close" onClick={handleCloseOverviewModal}/>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default OverviewModal;