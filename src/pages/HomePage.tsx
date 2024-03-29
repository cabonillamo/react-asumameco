import { useAuth } from "../hooks/useAuth";
import { useEvents } from "../hooks/useEvents";
import {
  ProfileCard,
  TopBar,
  MoreInfo,
  TextInput,
  PostCard,
} from "../components/home";
import { useNavigate } from "react-router-dom";
import { NoProfile } from "../assets/home";
import { BiImages, BiSolidVideo } from "react-icons/bi";
import { BsFiletypeGif } from "react-icons/bs";
import { useEffect } from "react";
import { Event } from "../interfaces/context/events/event";

function Home() {
  const { user, isAuth, isLoading } = useAuth();
  const { events, loadEvents } = useEvents();

  useEffect(() => {
    loadEvents();
  }, []);

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
          <div className="flex-1 h-full bg-primary px-4 flex flex-col gap-6 overflow-y-auto rounded-lg">
            <form className="bg-primary px-4 rounded-lg">
              <div className="w-full flex items-center gap-2 py-4 border-b border-[#66666645]">
                <img
                  src={NoProfile}
                  alt={user?.nombre.charAt(0) || "U"}
                  className="w-14 h-14 object-cover rounded-full"
                />
                <TextInput
                  styles="w-full rounded-full py-5"
                  placeholder="Escribe un mensaje..."
                  name="description"
                />
              </div>
              <div className="flex items-center justify-between py-4">
                <label
                  htmlFor="imgUpload"
                  className="flex items-center gap-1 text-base text-ascent-2 hover:text-ascent-1 cursor-pointer"
                >
                  <input
                    type="file"
                    // onChange
                    className="hidden"
                    id="imgUpload"
                    data-max-size="5120"
                    accept=".jpg, .jpeg, .png"
                  />
                  <BiImages />
                  <span>Evento</span>
                </label>
                <label
                  className="flex items-center gap-1 text-base text-ascent-2
                hover:text-ascent-1 cursor-pointer"
                  htmlFor="videoUpload"
                >
                  <input
                    type="file"
                    data-max-size="5120"
                    className="hidden"
                    id="videoUpload"
                    accept=".mp4, .mkv"
                  />
                  <BiSolidVideo />
                  <span>Video</span>
                </label>

                <label
                  className="flex items-center gap-1 text-base text-ascent-2
                hover:text-ascent-1 cursor-pointer"
                  htmlFor="vgifUpload"
                >
                  <input
                    type="file"
                    data-max-size="5120"
                    className="hidden"
                    id="vgifUpload"
                    accept=".gif"
                  />
                  <BsFiletypeGif />
                  <span>Gif</span>
                </label>
              </div>
            </form>
            {events.length > 0 ? (
              events.map((event: Event) => (
                <PostCard key={event.id} post={event} />
              ))
            ) : (
              <div className="w-full bg-primary shadow-sm rounded-lg px-6 py-5">
                <p className="text-ascent-2 text-center">
                  No hay eventos de momento
                </p>
              </div>
            )}
          </div>
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
