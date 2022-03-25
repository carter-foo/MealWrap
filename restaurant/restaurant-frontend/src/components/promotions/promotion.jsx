import React from "react";
import EditDialog from "./promoEditor";
import IconButton from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete"
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

export default class promotion extends React.Component {
  constructor(props) {
    super();
    this.state = {
      open: false,
      data: props.data
    };
  }

  handleDialogForm = (event, newData) => {
    this.setState({
      data: newData,
    });
  };

  handleDelete (event) {
    this.props.handleDelete(event, this.props.index);
  }

  handleOpen() {
    this.setState({
      open: true,
      data: this.state.data
    });
  }

  handleClose () {
    console.log("test");
    this.setState({
      open: false,
      data: this.state.data
    });
    console.log(this.state.open);
  }

  render() {
    return (
      <tr>
        <th>{this.state.data.title}</th>
        <th>{this.state.data.description}</th>
        <th>{this.state.data.category}</th>
        <th>{this.state.data.priceReduction}% off</th>
        <th>
          <EditDialog
            openButton={<Button>Edit</Button>}
            handleSubmit={this.handleDialogForm.bind(this)}
            data={this.state.data}
          />
        </th>
        <th>
          <IconButton onClick={this.handleOpen.bind(this)}>
            <DeleteIcon />
          </IconButton>
          <Dialog open={this.state.open} onClose={this.handleClose.bind(this)}>
              <DialogTitle>Confirm promotion deletion</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Are you sure you wish to remove this promotion?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleDelete.bind(this)}>Confirm</Button>
                <Button onClick={this.handleClose.bind(this)}>Cancel</Button>
              </DialogActions>
            </Dialog>
        </th>
      </tr>
    );
  }
}
