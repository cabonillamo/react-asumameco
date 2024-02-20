import { useAuth } from "../hooks/useAuth";

function Home() {
  const { isAuth, user } = useAuth();
  console.log("User:", user);
  return (
    <div>
      <h1>Home</h1>
      <p>isAuth: {isAuth.toString()}</p>
      <p>User: {user}</p>
    </div>
  );
}

export default Home;
