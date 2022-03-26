import { useNavigate } from "react-router-dom";
import DirectButton from "../directButton";

export default function Homepage() {
  return (
    <div>
      <h1>Welcome to the MealWrap Restaurant Editor</h1>
      <h2>What is it?</h2>
      <p>
        This restaurant editor is designed to make it easy for you to change the
        menu of your restaurant on MealWrap and to add, remove or edit any
        promotions that are currently active. As soon as you save your changes,
        customers using MealWrap will instantly be able to see the updated menu
        and promotions so that you have complete control over menu and pricing.
      </p>
      <h2>How does it work?</h2>
      <p>
        All you need to do is click either of the two buttons below, edit your
        menu or promotions and save your changes. Note that this change is
        instant; Any customers who go to use MealWrap after the change will be
        using the updated menu and promotions.
      </p>
      <span>
        <DirectButton text="Edit Restaurant Menu" route="/menu" />
        <br />
        <DirectButton text="Edit Promotions" route="/promotions" />
      </span>
    </div>
  );
}
