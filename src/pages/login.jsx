import DirectButton from "../components/directButton";

export default function Login() {
  return (
    <div>
      <div>
        <h1>Please log in to access your restaurant</h1>
        <form>
          <label>Username:</label>
          <br />
          <input />
          <br />
          <label>Password:</label>
          <br />
          <input type="password" />
        </form>
        <DirectButton text="Submit" route="/home" />
      </div>
    </div>
  );
}
