import TopBar from "../components/home/TopBar";
import { useSelector } from "react-redux";

function Home() {
  // const { isAuth, user } = useAuth();
  const { theme } = useSelector((state: any) => state.theme);
  console.log(theme);
  return (
    <div className="home w-full px-0 lg:px-10 pb-20 2xl:px-40 bg-bgColor lg:rounded-lg h-screen overflow-hidden">
      <TopBar />
    </div>
  );
}

export default Home;
