import { Event } from "../../../interfaces/context/events/event";
import { useState } from "react";
import moment from "moment";
import { FaLocationDot } from "react-icons/fa6";
import { IoCheckbox } from "react-icons/io5";

function PostCard({
  post,
  partipation,
}: {
  post: Event;
  partipation: () => void;
}) {
  const [showAll, setShowAll] = useState(0);

  return (
    <div className="mb-2 bg-primary p-4 pt-0 rounded-xl ">
      {/* <div className="flex gap-3 items-center mb-2"></div>  */}
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
                className="text-blue font-medium cursor-pointer"
                onClick={() => setShowAll(0)}
              >
                Mostrar menos
              </span>
            ) : (
              <span
                className="text-blue font-medium cursor-pointer"
                onClick={() => setShowAll(post.id)}
              >
                Mostrar más
              </span>
            ))}
        </p>

        {post.imagen && (
          <img
            src={post.imagen}
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
          <button
            onClick={partipation}
            className="flex items-center gap-1 text-base text-ascent-2
          hover:text-ascent-1 cursor-pointer"
          >
            <IoCheckbox />
            <span>Participar</span>
          </button>
        }
      </div>
    </div>
  );
}

export default PostCard;
