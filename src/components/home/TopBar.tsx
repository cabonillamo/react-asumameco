import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BsMoon, BsSunFill } from "react-icons/bs";
import { ThemeAction, setTheme } from "../../redux/slice/theme/theme";
import { Dispatch } from "@reduxjs/toolkit";
import { CustomButton } from ".";
import { useAuth } from "../../hooks/useAuth";
import Logo from "../../icons/landing/Logo";
import { RootState } from "../../interfaces/redux/rootState";

function TopBar() {
  const { theme } = useSelector((state: RootState) => state.theme);
  const dispatch: Dispatch<ThemeAction> = useDispatch();
  const { signOut } = useAuth();

  const handleTheme = () => {
    const themeValue = theme === "light" ? "dark" : "light";
    dispatch(setTheme(themeValue));
  };

  return (
    <div className="topbar w-full flex items-center justify-between py-3 md:py-6 px-4 bg-primary">
      <Link to="/" className="flex gap-2 items-center">
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
          onClick={() => {
            signOut();
          }}
          title="Logout"
          containerStyles="text-sm text-ascent-1 px-4 md:px-6 py-1 md:py-2 border border-[#666] rounded-full"
        />
      </div>
    </div>
  );
}

export default TopBar;
