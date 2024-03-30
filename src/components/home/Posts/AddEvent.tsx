import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import TextInput from "../TextInput";
import { CustomButton } from "..";
import { useEvents } from "../../../hooks/useEvents";

function AddEvent({
  closeModal,
  initialEventName,
}: {
  closeModal: () => void;
  initialEventName: string;
}) {
  const { events } = useEvents();
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: { ...events, nombre: initialEventName },
  });

  const [isModalOpen, setModalOpen] = useState<boolean>(true);

  const handleClose = () => {
    closeModal();
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-[#000] opacity-70"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div
              className="inline-block align-bottom bg-primary rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="flex justify-between px-6 py-5 pb-2">
                <label
                  htmlFor="name"
                  className="block font-medium text-xl text-ascent-1 text-left"
                >
                  Agregar Evento
                </label>

                <button className="text-ascent-1" onClick={handleClose}>
                  <MdClose size={22} />
                </button>
              </div>
              <form className="px-4 sm:px-6 flex flex-col gap-3 2xl:gap-6">
                <TextInput
                  label="Nombre del evento"
                  placeholder="Ponle un nombre al evento que quieres crear"
                  type="text"
                  styles="w-full"
                  register={register("nombre", {
                    required: "El nombre del evento es requerido",
                  })}
                />
                <TextInput
                  label="Dirección del evento"
                  placeholder="¿Dónde se llevará a cabo el evento?"
                  type="text"
                  styles="w-full"
                  register={register("direccion", {
                    required: "La dirección del evento es requerida",
                  })}
                />

                <TextInput
                  label="Fecha del evento"
                  type="date"
                  styles="w-full"
                  register={register("fecha", {
                    required: "La fecha del evento es requerida",
                  })}
                />

                <TextInput
                  label="Descripción del evento"
                  placeholder="Describe brevemente el evento que quieres crear"
                  type="text"
                  styles="w-full"
                  register={register("descripcion")}
                />

                <div className="py-5 sm:flex sm:flex-row-reverse border-b border-[#66666645]">
                  <CustomButton
                    type="submit"
                    containerStyles={`inline-flex justify-center rounded-md bg-blue px-8 py-3 text-sm font-medium text-white outline-none`}
                    title="Crear Evento"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddEvent;
