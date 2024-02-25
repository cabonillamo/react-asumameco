import { Link } from "react-router-dom";
import { User } from "../../interfaces/context/auth/user";
import { NoProfile } from "../../assets/home";

function ProfileCard({ user }: { user: User | null }) {
  if (!user) return null;
  return (
    <div className="w-full bg-primary flex flex-col items-center shadow-sm rounded-xl px-6 py-4">
      <div className="w-full flex items-center justify-between border-b pb-5 border-[#66666645]">
        <Link to="/profile" className="flex gap-2">
          <img
            src={NoProfile}
            alt={user?.nombre?.charAt(0) || "U"}
            className="w-14 h-14 object-cover rounded-full"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-medium text-ascent-1">{user.nombre}</p>
            <span className="text-ascent-2">{user.email}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProfileCard;
