import { FcApprove, FcDisapprove } from "react-icons/fc";
import { NoProfile } from "../../assets/home";
import { Associate } from "../../interfaces/context/managers/user";

function AssociateCard({ associate }: { associate: Associate }) {
  return (
    <div className="bg-secondary p-8 rounded-lg shadow-md max-w-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <img
            src={NoProfile}
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="text-ascent-1 font-semibold">{associate.nombre}</p>
            <p className="text-ascent-2 text-sm">{associate.apellidos}</p>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-ascent-2 text-sm">{associate.email}</p>
        <p className="text-ascent-2 text-sm">{associate.telefono}</p>
      </div>

      <div className="flex items-center justify-between text-gray-500">
        <div className="flex items-center space-x-2">
          <button className="flex justify-center items-center gap-2 px-2 hover:bg-primary hover:text-ascent-2 rounded-full p-1">
            Activar
            <FcApprove size={26} />
          </button>
        </div>
        <button
          className="flex justify-center items-center gap-2 px-2 
        hover:bg-primary hover:text-ascent-2 rounded-full p-1"
        >
          Desactivar
          <FcDisapprove size={26} />
        </button>
      </div>
    </div>
  );
}

export default AssociateCard;
