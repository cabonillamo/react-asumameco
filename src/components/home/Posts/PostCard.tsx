import { Event } from "../../../interfaces/context/events/event";
import { useState } from "react";
import moment from "moment";
import { FaLocationDot } from "react-icons/fa6";
import { IoCheckbox } from "react-icons/io5";
import { NoProfile } from "../../../assets/home";

function PostCard({
  post,
  partipation,
  userLogged,
}: {
  post: Event;
  partipation: () => void;
  userLogged: any;
}) {
  const [showAll, setShowAll] = useState(0);

  return (
    <div className="mb-2 bg-primary p-4 pt-0 rounded-xl ">
      <div className="flex gap-3 items-center mb-2">
        <img
          src={NoProfile}
          alt={post.usuarioCreador.nombre.charAt(0) || "U"}
          className="w-14 h-14 object-cover rounded-full"
        />
        <div>
          <h1 className="font-medium text-lg text-ascent-1">
            {post.usuarioCreador.nombre + " " + post.usuarioCreador.apellidos}
          </h1>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <div className="">
          <span className="text-ascent-2">
            <div className="flex items-center justify-center mb-1 gap-1.5">
              <FaLocationDot />
              {post.direccion}
            </div>
          </span>
        </div>

        <span className="text-ascent-2">
          {moment(post.fechaCreacion ?? "").fromNow()}
        </span>
      </div>

      <div>
        <p className="text-ascent-2">
          {showAll === post.id
            ? post.descripcion
            : post.descripcion?.slice(0, 100)}

          {post.descripcion?.length! > 101 &&
            (showAll === post.id ? (
              <span
                className="text-blue font-medium cursor-pointer ml-1.5"
                onClick={() => setShowAll(0)}
              >
                Mostrar menos
              </span>
            ) : (
              <span
                className="text-blue font-medium cursor-pointer ml-1.5"
                onClick={() => setShowAll(post.id)}
              >
                Mostrar más
              </span>
            ))}
        </p>
        {post.imagen && (
          <img
            src={`data:image/png;base64,${post.imagen}`}
            alt="imagen del evento"
            className="w-full mt-2 rounded-lg"
          />
        )}
      </div>
      <div
        className="mt-4 flex justify-between items-center px-3 py-2 text-ascent-2 text-base border-t border-[#66666645]
      "
      >
        {
          <p
            onClick={partipation}
            className="flex items-center gap-1 text-base text-ascent-2
          hover:text-ascent-1 cursor-pointer"
          >
            <IoCheckbox size={20} color="blue" />
            <span>Participar</span>
          </p>
        }
      </div>
    </div>
  );
}

export default PostCard;
