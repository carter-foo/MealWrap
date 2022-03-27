import React, { useEffect } from "react";
import DirectButton from "../directButton";
import axios from "axios";

export default function Homepage(props) {
  const [name, setName] = React.useState("");
  const [rating, setRating] = React.useState(null);

  const getData = () => {
    axios
      .get("/home", {
        params: {
          id: props.merchant_id,
        },
      })
      .then((res) => {
        setName(res.data.name);
        setRating(res.data.rating);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Logged in as {name}</h1>
      <p>Current restaurant rating: {rating}</p>
      <h1>Welcome to the MealWrap Restaurant Editor</h1>
      <h2>What is it?</h2>
      <p>
        This restaurant editor is designed to make it easy for you to change the
        menu of your restaurant on MealWrap including any item discounts that
        are currently active. As soon as you save your changes, customers using
        MealWrap will instantly be able to see the updated menu and discounts so
        that you have complete control over menu and pricing.
      </p>
      <h2>How does it work?</h2>
      <p>
        All you need to do is click the button below, edit your menu and save
        your changes. Note that this change is instant; Any customers who go to
        use MealWrap after the change will be using the updated menu and
        discounts.
      </p>
      <span>
        <DirectButton text="Edit Restaurant Menu" route="/menu" />
      </span>
    </div>
  );
}
