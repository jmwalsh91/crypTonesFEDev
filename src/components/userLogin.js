import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export default function UserLogin() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} color="secondary">
       Log in
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle color="primary">Sign in</DialogTitle>
        <DialogContent color="secondary">
          <DialogContentText color="secondary">
           If you have already created an account, please sign in.
          </DialogContentText>
          <TextField color="primary"
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField color="primary"
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
          <DialogContentText color="primary">
              Don't have an account yet? Don't worry! Creating an account will allow you to save and recall patches. Just check the "register" box and hit submit.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
            <FormGroup color="primary">
                <FormControlLabel control={<Checkbox defaultChecked />} label="Create new account" color="secondary"/>
                <FormControlLabel disabled control={<Checkbox />}   label="Register new account?" />
            </FormGroup>
        </DialogActions>
      </Dialog>
    </div>
  );
}
