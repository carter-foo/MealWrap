import { useNavigate } from "react-router-dom";
import { callAPI } from "../App.js";
import Login from '../pages/login';
import { yo } from '../pages/login';

export default function DirectButton(props) {
  let navigate = useNavigate();
  const routeChange = (route) => {
    navigate(route);
  };

  return (
    <button
      onClick={() => {
        callAPI(props.route, props.state).then(function (r) {
          if (r != 'invalid') {
            routeChange(r);
          }
          else {
            props.func("invalid");
          }
        })
      }}
    >
      {props.text}
    </button>
  );
}
