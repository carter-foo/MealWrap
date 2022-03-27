import React, { useEffect } from "react";
import DirectButton from "../directButton";
import axios from "axios";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import DeleteButton from "../deleteButton";
import StatusMessage from "../statusMessage";

export default function Menu(props) {
  const [items, setItems] = React.useState([]);
  const [statusMessage, setStatusMessage] = React.useState(null);
  let key = 0;

  const getData = () => {
    axios
      .get("/menu", {
        params: {
          id: props.merchant_id,
        },
      })
      .then((res) => {
        setItems(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const getKey = () => {
    key++;
    return key;
  };

  const handleNameChange = (e, i) => {
    let newItems = [...items];
    newItems[i].name = e.target.value;
    setItems(newItems);
  };

  const handleDescriptionChange = (e, i) => {
    let newItems = [...items];
    newItems[i].description = e.target.value;
    setItems(newItems);
  };

  const handlePriceChange = (e, i) => {
    let newItems = [...items];
    newItems[i].price = e.target.value;
    setItems(newItems);
  };

  const handlePercentOffChange = (e, i) => {
    let newItems = [...items];
    newItems[i].percent_off = e.target.value;
    setItems(newItems);
  };

  const handleItemDelete = (i) => {
    const newItems = [...items];
    newItems.splice(i, 1);
    setItems(newItems);
  };

  const addItem = () => {
    const newItems = [...items];
    newItems.push({
      description: "",
      id: null,
      image: null,
      merchant_id: props.merchant_id,
      name: "",
      percent_off: 0,
      price: 0,
    });
    setItems(newItems);
  };

  const closeStatus = () => {
    console.log("Why");
    setStatusMessage(null);
  };

  const checkUniqueness = () => {
    let names = [];
    for (let i = 0; i < items.length; i++) {
      for (let j = 0; j < names.length; j++) {
        if (items[i].name === names[j]) {
          return false;
        }
      }
      names.push(items[i].name);
    }
    return true;
  };

  const saveChanges = () => {
    let unique = checkUniqueness();
    if (unique) {
      axios
        .post("/menu", {
          id: props.merchant_id,
          menu: items,
        })
        .then((res) => {
          if (res.data.success) {
            setStatusMessage(
              <StatusMessage
                error={false}
                text="Successfully updated menu!"
                handleClose={closeStatus}
              />
            );
          } else {
            setStatusMessage(
              <StatusMessage
                error={true}
                text="Unknown error"
                handleClose={closeStatus}
              />
            );
          }
          getData();
        });
    } else {
      setStatusMessage(
        <StatusMessage
          error={true}
          text="Error: Please make sure that each item name is unique."
          handleClose={closeStatus}
        />
      );
    }
  };

  return (
    <div>
      <h1>Edit the menu</h1>
      <Button variant="outlined" startIcon={<AddIcon />} onClick={addItem}>
        Add new item
      </Button>
      {items.map((item, i) => {
        return (
          <div className="menu-item" key={getKey()}>
            <form>
              <label>Name:</label>
              <input
                value={item.name}
                onChange={(e) => handleNameChange(e, i)}
              />
              <br />
              <label>Description:</label>
              <br />
              <textarea
                className="menu-description"
                value={item.description}
                onChange={(e) => handleDescriptionChange(e, i)}
              />
              <br />
              <label>Price:</label>
              <input
                value={item.price}
                onChange={(e) => handlePriceChange(e, i)}
              />
              <br />
              <label>Discount:</label>
              <input
                value={item.percent_off}
                onChange={(e) => handlePercentOffChange(e, i)}
              />
              % off
              <br />
              <div className="menu-item-footer">
                <DeleteButton
                  className="menu-delete-button"
                  dialogText={"Are you sure you wish to delete this item?"}
                  delete={() => handleItemDelete(i)}
                />
              </div>
            </form>
          </div>
        );
      })}
      <Button variant="outlined" onClick={saveChanges}>
        Save changes
      </Button>
      <DirectButton route="/" text="Cancel" />
      <div>{statusMessage}</div>
    </div>
  );
}
