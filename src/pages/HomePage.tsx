import { useAuth } from "../hooks/useAuth";
import { ProfileCard, TopBar, MoreInfo } from "../components/home";
import { useNavigate } from "react-router-dom";

function Home() {
  const { user, isAuth, isLoading } = useAuth();
  const navigate = useNavigate();

  if (!isAuth) navigate("/login");

  if (isLoading) return <p>Cargando...</p>;

  if (user === undefined) window.location.reload();

  return (
    <>
      <div className="w-full px-0 lg:px-10 pb-20 2xl:px-40 bg-bgColor lg:rounded-lg h-screen overflow-hidden">
        <TopBar />
        <div className="w-full flex gap-2 lg:gap-4 pt-5 pb-10 h-full">
          <div className="hidden w-1/3 lg:w-1/4 h-full md:flex flex-col gap-6 overflow-y-auto">
            <ProfileCard user={user} />
            <MoreInfo user={user} />
          </div>
          <div className="flex-1 h-full bg-primary px-4 flex flex-col gap-6 overflow-y-auto"></div>
          <div className="hidden w-1/4 h-full lg:flex flex-col gap-8 overflow-y-auto">
            <div className="w-full bg-primary shadow-sm rounded-lg px-6 py-5">
              <div className="flex items-center justify-between text-xl text-ascent-1 pb-2 border-b border-[#66666645]">
                <span>Version</span>
                <span>1.0.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
