import React from 'react'
import DirectButton from "../components/directButton";
import promotion from '../components/promotions/promotion';
import Promotion from "../components/promotions/promotion";

export default function Promotions() {
  //get list of promotions active at the restaurant that's logged in, via an API call (for now just use this example object)
  const startingPromotionList = [
    {
      title: "Example promotion",
      description: "Burgers 40% off",
      category: "Burgers",
      priceReduction: "40",
      key: 0
    },
    {
      title: "Example promotion 2",
      description: "Drinks 80% off",
      category: "Drinks",
      priceReduction: "80",
      key: 1
    },
  ];

  const [promotionList, setPromotionList] = React.useState(startingPromotionList);

  const handleDelete = (event, index) => {
    //Add an API call to delete the item from the database when this event is called
    console.log(index);
    const newList = [...promotionList]
    newList.splice(index, 1);
    setPromotionList(newList);
  }

  return (
    //iterate through list of promotions, render each as a promotion component
    <div>
      <h1>Current promotions:</h1>
      <table>
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
            return <Promotion data={obj} index={i} key={obj.key} handleDelete={handleDelete}/>;
          })}
        </tbody>
      </table>
      <DirectButton route="/home" text="Cancel" />
    </div>
  );
}
