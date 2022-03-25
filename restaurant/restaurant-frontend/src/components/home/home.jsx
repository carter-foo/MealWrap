import { useNavigate } from "react-router-dom";
import APIDirectButton from "../apiDirectButton";

export default function Homepage() {
  let navigate = useNavigate();
  const routeChange = (route) => {
    navigate(route);
  };

  return (
    <div>
      <APIDirectButton
        text="Edit Restaurant Menu"
        route="/menu"
      />
      <br />
      <APIDirectButton text="Edit Promotions" route="/promotions" />
    </div>
  );
}
