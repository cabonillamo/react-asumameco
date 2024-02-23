// import { useAuth } from "../../hooks/useAuth";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../icons/landing/Logo";
// import { useForm } from "react-hook-form";
import CustomButton from "./CustomButton";
import { BsMoon, BsSunFill } from "react-icons/bs";
import { SetTheme } from "../../redux/slice/theme/theme";

function TopBar() {
  const { theme } = useSelector((state: any) => state.theme);
  // const { user } = useAuth();
  const dispatch = useDispatch();
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const handleSearch = async (data: any) => {};

  const handleTheme = () => {
    const themeValue = theme === "light" ? "dark" : "light";
    dispatch(SetTheme(themeValue));
  };

  return (
    <div className="topbar w-full flex items-center justify-between py-3 md:py-6 px-4 bg-primary">
      <Link to={"/home"} className="flex gap-2 items-center">
        <div className="p-1 md:p-2 bg-[#065ad8] rounded text-white">
          <Logo />
        </div>
        <span className="text-xl md:text-2xl text-[#065ad8] font-semibold">
          Asumameco
        </span>
      </Link>

      <div className="flex gap-4 items-center text-ascent-1 text-md md:text-xl">
        <button onClick={() => handleTheme()}>
          {theme ? <BsMoon /> : <BsSunFill />}
        </button>
        <div className="hidden lg:flex"></div>
      </div>

      <div>
        <CustomButton
          onClick={() => {}}
          title="Logout"
          containerStyles="text-sm text-ascent-1 px-4 md:px-6 py-1 md:py-2 border border-[#666] rounded-full"
        />
      </div>
    </div>
  );
}

export default TopBar;
