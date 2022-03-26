import DirectButton from "./directButton";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";

export default function NavBar(props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    props.logout();
  }

  return (
    <div className="navbar">
      <h1>MEALWRAP RESTAURANT EDITOR</h1>
      <DirectButton route="/" text="Home" />
      <DirectButton route="/menu" text="menu" />
      <DirectButton route="/promotions" text="promotions" />
      <Button variant="outlined" onClick={handleLogout} route="/" text="log out">Log out</Button>
    </div>
  );
}
