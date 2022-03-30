import NavBar from "../components/navbar";

export default function Page(props) {
  return (
    <div className="page">
      <NavBar logout={props.logout}/>
      <div className="pageborder">{props.exactPage}</div>
    </div>
  );
}
