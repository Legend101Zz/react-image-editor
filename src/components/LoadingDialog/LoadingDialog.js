import { useState } from 'react';
import { Button, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@mui/material';
import { Dialog } from './Dialog';

function App() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubscribe = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 2000);
  };

  return (
    <div className="App">
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Open Dialog
      </Button>
      <Dialog loading={loading} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates occasionally.
          </DialogContentText>
          <TextField autoFocus margin="dense" id="name" label="Email Address" type="email" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubscribe} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
