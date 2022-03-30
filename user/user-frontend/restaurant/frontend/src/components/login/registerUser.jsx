import React from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import axios from "axios";

export default function RegisterUser() {
  const [open, setOpen] = React.useState(false);
  const [address, setAddress] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validateInput = () => {
    if (address === "") return false;
    if (name === "") return false;
    if (phone === "" || phone.length !== 10) return false;
    if (password === "") return false;
    return true;
  }

  const handleSubmit = () => {
    if (validateInput) {
      const newRestaurant = {
        phone: phone,
        password: password,
        name: name,
        description: description,
        address: address,
      };

      axios.post("/register", newRestaurant).then((res) => {
        if (res.data.success) {
          setPhone("");
          setPassword("");
          setName("");
          setDescription("");
          setAddress("");
          handleClose();
        } else {
          console.log("Failure...");
        }
      });
    }
  };

  const nameChange = (event) => {
    setName(event.target.value);
  };

  const addressChange = (event) => {
    setAddress(event.target.value);
  };

  const phoneChange = (event) => {
    setPhone(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const descriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Sign up
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>Register your restaurant</DialogTitle>
        <DialogContent className="promo-editor">
          <DialogContentText component="div">
            <form>
              <label>Restaurant name:</label>
              <input value={name} onChange={nameChange} />
              <br />
              <label>Address:</label>
              <input value={address} onChange={addressChange} />
              <br />
              <label>Phone number:</label>
              <input value={phone} onChange={phoneChange} />
              <br />
              <label>Password:</label>
              <input value={password} onChange={passwordChange} />
              <br />
              <label>Add a short description:</label>
              <textarea
                value={description}
                className="promo-editor-description"
                onChange={descriptionChange}
              />
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Confirm</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
