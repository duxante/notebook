import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Notification = ({notificationConfig, setNotificationConfig}) => {
  


  const handleClose = () => {
    setNotificationConfig({
        visible: false,
        severity: "",
        text: "",
    })
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={notificationConfig.visible} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={notificationConfig.severity} sx={{ width: '100%' }}>
          {notificationConfig.text}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default Notification;