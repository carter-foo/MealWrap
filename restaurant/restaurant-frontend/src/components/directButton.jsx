import { useNavigate } from "react-router-dom";

export default function DirectButton (props) {
  let navigate = useNavigate();
  const routeChange = (route) => {
    navigate(route);
  };

  return (
    <button onClick = {() => {
      routeChange(props.route);
    }}>
      {props.text}
    </button>
  )

}