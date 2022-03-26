import React from "react";
import DirectButton from "../directButton";
import Promotion from "./promotion";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import PromoEditor from "./promoEditor";
import uuid from "react-uuid";

export default function Promotions() {
  //get list of promotions active at the restaurant that's logged in, via an API call (for now just use this example object)
  const startingPromotionList = [
    {
      title: "Example promotion",
      description: "Burgers 40% off",
      category: "Burgers",
      priceReduction: "40",
      key: uuid(),
    },
    {
      title: "Example promotion 2",
      description: "Drinks 80% off",
      category: "Drinks",
      priceReduction: "80",
      key: uuid(),
    },
  ];

  const [promotionList, setPromotionList] = React.useState(
    startingPromotionList
  );

  const handleDelete = (event, index) => {
    //Add an API call to delete the item from the database when this event is called
    console.log(index);
    const newList = [...promotionList];
    newList.splice(index, 1);
    setPromotionList(newList);
  };

  const handleAddPromotion = (event, newPromo) => {
    newPromo.key = uuid();
    let tempList = [...promotionList];
    tempList.push(newPromo);
    setPromotionList(tempList);
  };

  return (
    //iterate through list of promotions, render each as a promotion component
    <div>
      <div>
        <h1>Current promotions:</h1>
        {/* <Button variant="outlined" startIcon={<AddIcon />}>Add new promotion</Button> */}
        <PromoEditor
          openButton={
            <Button variant="outlined" startIcon={<AddIcon />}>
              Add promotion
            </Button>
          }
          handleSubmit={handleAddPromotion}
        />
        <table className="promo-table">
          <thead>
            <tr>
              <th>Name of promotion</th>
              <th>Promotion description</th>
              <th>Discounted category</th>
              <th>Discount percentage</th>
            </tr>
          </thead>
          <tbody>
            {promotionList.map((obj, i) => {
              return (
                <Promotion
                  data={obj}
                  index={i}
                  key={obj.key}
                  handleDelete={handleDelete}
                />
              );
            })}
          </tbody>
        </table>
        <Button variant="outlined">Save changes</Button>
        <DirectButton route="/" text="Cancel" />
      </div>
    </div>
  );
}
