import React from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

export default function EditDialog(props) {
  //Query the database for a list of food categories at the restaurant (For now, just use this example array)
  const categories = ["Burgers", "Drinks", "Sides"];

  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState(() => {
    if(props.data !== undefined) {
      return props.data.title;
    } else {
      return "";
    };
  });
  const [description, setDescription] = React.useState(() => {
    if(props.data !== undefined) {
      return props.data.description;
    } else {
      return "";
    };
  });
  const [category, setCategory] = React.useState(() => {
    if(props.data !== undefined) {
      return props.data.category;
    } else {
      return categories[0];
    };
  });
  const [deal, setDeal] = React.useState(() => {
    if(props.data !== undefined) {
      return props.data.priceReduction;
    } else {
      return 10;
    };
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleDealChange = (event) => {
    setDeal(event.target.value);
  };

  const handleSubmitWrapper = (event) => {
    event.preventDefault();
    setOpen(false);
    const newData = {
      title: title,
      description: description,
      category: category,
      priceReduction: deal,
    };
    props.handleSubmit(event, newData);
  };

  return (
    <div>
      {/* <Button onClick={handleClickOpen}>{props.openButtonText}</Button> */}
      {React.cloneElement(props.openButton, {onClick: handleClickOpen})}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit promotion</DialogTitle>
        <DialogContent>
          <DialogContentText component={"div"}>
            <form onSubmit={handleSubmitWrapper} id="promoform">
              <label>Title: </label>
              <input type="text" value={title} onChange={handleTitleChange} />
              <br />
              <label>Description: </label>
              <textarea
                id="description"
                value={description}
                onChange={handleDescriptionChange}
              />
              <br />
              <label>Category: </label>
              <select onChange={handleCategoryChange}>
                {categories.map((obj, i) => {
                  return (
                    <option value={obj} key={i}>
                      {obj}
                    </option>
                  );
                })}
              </select>
              <br />
              <label>Offer: </label>
              <select onChange={handleDealChange} value={deal}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
                <option value="70">70</option>
                <option value="80">80</option>
                <option value="90">90</option>
              </select>
              <label>% off</label>
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" form="promoform">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
