import { useNavigate } from "react-router-dom";
import { callAPI } from "../scripts/callAPI.js";
import Button from "@material-ui/core/Button";

export default function APIDirectButton(props) {
  let navigate = useNavigate();
  const routeChange = (route) => {
    navigate(route);
  };

  return (
    <Button
      variant="outlined"
      onClick={() => {
        var state;
        if (props.text == "Save")
        {
            var s = new Array();
            props.state.categories.forEach((row) => {
              row.items.forEach((itemrow) => {
                //s.push({name: itemrow.name, description: itemrow.description, price: itemrow.price, id: itemrow.id, category: row.name});
                var input = "UPDATE products SET name='" + itemrow.name + "', description='" + itemrow.description + "', price=" +
                itemrow.price + ", category='" + itemrow.category + "' WHERE id=" + itemrow.id + ";";
                s.push(input);
              });
            });

            state = {save: true, items: s};
        }
        else {
          state = props.state;
        }
        callAPI(props.route, state).then(function (r) {
          if (r != 'invalid') {
            routeChange(r);

            if (props.text == "Save")
            {
              props.state.save = false;
            }
          }
          else {
            props.func("invalid");
          }
        })
      }}
    >
      {props.text}
    </Button>
  );
}
