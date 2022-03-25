import NavBar from "../components/navbar";

export default function Page(props) {
  return (
    <div className="page">
      <NavBar />
      <div className="pageborder">{props.exactPage}</div>
    </div>
  );
}
