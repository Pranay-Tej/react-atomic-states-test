import Nav from "../Nav";
import { useAuthStoreActions } from "./store/authStore";

function ZustandLogin() {
  const { login } = useAuthStoreActions();
  return (
    <>
      <Nav />
      <div>
        <button onClick={() => login("zustand-user")}>Login</button>
      </div>
    </>
  );
}

export default ZustandLogin;
