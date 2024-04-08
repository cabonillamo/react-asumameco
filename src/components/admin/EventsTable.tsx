import { Event } from "../../interfaces/context/events/event";
import { useEvents } from "../../hooks/useEvents";

function EventsTable({ events }: { events: Event[] }) {
  const { deleteEvent } = useEvents();

  const handleDeleteEvent = async (eventId: number) => {
    try {
      const res = await deleteEvent(eventId);
      alert(res.message);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nombre del evento
            </th>
            <th scope="col" className="px-6 py-3">
              Dirección
            </th>
            <th scope="col" className="px-6 py-3">
              Fecha
            </th>
            <th scope="col" className="px-6 py-3">
              Creador
            </th>
            <th scope="col" className="px-6 py-3">
              Acción
            </th>
          </tr>
        </thead>
        <tbody>
          {events.map((event: Event) => (
            <tr
              key={event.id}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {event.nombre}
              </td>
              <td className="px-6 py-4">{event.direccion}</td>
              <td className="px-6 py-4">
                {new Date(event.fecha).toLocaleDateString()}
              </td>
              <td className="px-6 py-4">
                {event.usuarioCreador.nombre} {event.usuarioCreador.apellidos}
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={() => handleDeleteEvent(event.id)}
                  className="font-medium text-red-600 dark:text-red-500 hover:underline focus:outline-none"
                >
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventsTable;
