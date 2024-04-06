import { User } from "../../interfaces/context/auth/user";
import { TextInput } from "../auth";
import { useUsers } from "../../hooks/useUsers";
import { useForm } from "react-hook-form";
import { useState } from "react";

function AddUser({ user, idRol }: { user: User; idRol: number }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createAsociado, createEncargado } = useUsers();

  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const onSubmit = handleSubmit(async (data: any) => {
    try {
      console.log(data);
      if (idRol === 1) {
        if (selectedOption === "2") {
          createAsociado(data);
        } else {
          createEncargado(data);
        }
      } else {
        createAsociado(data);
      }
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div className="post p-5 lg:p-1 rounded-md">
      <div className="lg:fixed lg:top-7 lg:left-14 lg:w-3/12 md:fixed md:w-5/12">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full mb-4">
          <div className="relative">
            <p>
              <span className="text-black-800 font-semibold">Hola,</span>
            </p>
          </div>
          <div className="flex items-center mt-4">
            <h2 className="text-xl font-bold text-gray-800">
              {user.nombre} {user.apellidos}
            </h2>
          </div>
          <p className="text-gray-700 mt-2">{user.email}</p>
          <div className="flex items-center mt-4 space-x-4">
            <span className="text-blue-500 hover:underline">
              {user.idRol === 1 ? (
                <div>
                  <span>Rol: Administrador</span>
                </div>
              ) : (
                <div>
                  <span>Rol: Encargado</span>
                </div>
              )}
            </span>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <form onSubmit={onSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Nuevo usuario
              </label>

              <TextInput
                id="cedula"
                name="cedula"
                type="text"
                placeholder="Cédula del usuario"
                register={register("id", {
                  required: "La cédula es requerida",
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "La cédula debe ser un número",
                  },
                })}
                error={errors.cedula ? errors.cedula.message : ""}
              />

              <TextInput
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Nombre del usuario"
                register={register("nombre", {
                  required: "El nombre es requerido",
                })}
                error={errors.nombre ? errors.nombre.message : ""}
              />

              <TextInput
                id="apellidos"
                name="apellidos"
                type="text"
                placeholder="Apellidos del usuario"
                register={register("apellidos", {
                  required: "Los apellidos son requeridos",
                })}
              />

              <TextInput
                id="telefono"
                name="telefono"
                type="text"
                placeholder="Teléfono del usuario"
                register={register("telefono", {
                  required: "El teléfono es requerido",
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "El teléfono debe ser un número",
                  },
                })}
                error={errors.telefono ? errors.telefono.message : ""}
              />

              <TextInput
                id="email"
                name="email"
                type="email"
                placeholder="Correo electrónico"
                register={register("email", {
                  required: "El correo es requerido",
                })}
                error={errors.email ? errors.email.message : ""}
              />

              <TextInput
                id="clave"
                name="clave"
                type="password"
                placeholder="Contraseña"
                register={register("clave", {
                  required: "La contraseña es requerida",
                })}
                error={errors.clave ? errors.clave.message : ""}
              />

              {idRol === 1 && (
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Rol
                  </label>
                  <select
                    id="idRol"
                    name="idRol"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    onChange={handleSelectChange}
                    value={selectedOption}
                  >
                    <option value="1">Encargado</option>
                    <option value="2">Asociado</option>
                  </select>
                </div>
              )}
            </div>
            <div className="flex items-center justify-between"></div>

            <div className="mt-4">
              <p className="text-center text-gray-500 text-xs">
                &copy;2024 ASOMAMECO - Todos los derechos reservados.
              </p>
            </div>
            <button
              type="submit"
              className="text-black p-2 rounded-md w-full mt-4"
            >
              Crear usuario
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
