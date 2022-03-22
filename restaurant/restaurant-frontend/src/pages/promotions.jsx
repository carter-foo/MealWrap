import Promotion from "../components/promotions/promotion";

export default function Promotions() {
  //get list of promotions active at the restaurant that's logged in, via an API call (for now just use this example object)
  const promotionList = [
    {
      title: "Example promotion",
      description: "Burgers 40% off",
      category: "Burgers",
      priceReduction: "40",
    },
    {
      title: "Example promotion 2",
      description: "Drinks 80% off",
      category: "Drinks",
      priceReduction: "80",
    },
  ];

  return (
    //iterate through list of promotions, render each as a promotion component
    <div>
      <h1>Current promotions:</h1>
      {promotionList.map((obj, i) => {
        return <Promotion data={obj} key={i} />;
      })}
    </div>
  );
}
