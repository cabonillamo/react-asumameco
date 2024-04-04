import { FcApprove, FcDisapprove } from "react-icons/fc";
import { NoProfile } from "../../assets/home";
import { Manager } from "../../interfaces/context/managers/user";

function ManagersCard({ manager }: { manager: Manager }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <img
            src={NoProfile}
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="text-gray-800 font-semibold">
              {manager.nombre} {manager.apellidos}
            </p>
            <p className="text-gray-500 text-sm">{manager.email}</p>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-gray-800">{manager.justificacion}</p>
      </div>
      <div className="mb-4">
        <img
          src={NoProfile}
          alt="Post Image"
          className="w-full h-48 object-cover rounded-md"
        />
      </div>
      <div className="flex items-center justify-between text-gray-500">
        <div className="flex items-center space-x-2">
          <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
            <FcApprove size={26} />
          </button>
        </div>
        <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
          <FcDisapprove size={26} />
        </button>
      </div>
    </div>
  );
}

export default ManagersCard;
