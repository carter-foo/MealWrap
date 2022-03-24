import { useNavigate } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function DirectButton (props) {
  let navigate = useNavigate();
  const routeChange = (route) => {
    navigate(route);
  };

  return (
    <Button variant="outlined" onClick = {() => {
      routeChange(props.route);
    }}>
      {props.text}
    </Button>
  )

}