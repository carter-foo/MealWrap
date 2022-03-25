import DirectButton from "./directButton";
import APIDirectButton from "./apiDirectButton";

export default function NavBar() {
  return (
    <div className="navbar">
      <h1>MEAL WRAP RESTAURANT EDITOR</h1>
      <DirectButton route="/home" text="Home" />
      <APIDirectButton route="/menu" text="menu" />
      <APIDirectButton route="/promotions" text="promotions" />
      <DirectButton route="/" text="log out" />
    </div>
  );
}
