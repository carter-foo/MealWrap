import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";

export default function StatusMessage(props) {
  return (
    <div className={props.error ? "error-message" : "success-message"}>
      <div className="status-message-banner">
        <Button onClick={props.handleClose}>
          <CloseIcon />
        </Button>
      </div>
      <div>{props.text}</div>
    </div>
  );
}
