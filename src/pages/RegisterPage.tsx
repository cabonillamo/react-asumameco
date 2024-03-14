// import FormComponent from "../components/auth/FormComponent";

import { MdFamilyRestroom } from "react-icons/md";
import { TextInput, CustomButton } from "../components/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Logo } from "../assets/auth";
import { BsShare } from "react-icons/bs";
import { AiOutlineInteraction } from "react-icons/ai";
import { ImConnection } from "react-icons/im";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onsubmit = async () => {};
  return (
    <div className="bg-bgColor w-full h-[100vh] flex items-center justify-center p-6">
      <div className="w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex  flex-row-reverse bg-primary rounded-xl overflow-hidden shadow-xl">
        {/* left */}
        <div className="w-full lg:w-1/2 h-full p-10 2xl:px-20 flex flex-col justify-center">
          <div className="w-full flex gap-2 items-center mb-6">
            <div className="p-2 bg-[#07305d] rounded text-white">
              <MdFamilyRestroom />
            </div>
            <span className="text-2xl text-[#07305d] font-semibold">
              Asomameco
            </span>
          </div>
          <p className="text-ascent-1 text-base font-semibold">
            Haz el pre-registro
          </p>

          <form
            className="py-8 flex flex-col gap-5"
            onSubmit={handleSubmit(onsubmit)}
          >
            <div className="w-full flex flex-col lg:flex-row gap-1 md:gap-2">
              <TextInput
                name="name"
                placeholder="Nombre"
                label="Nombre"
                type="text"
                styles="w-full"
                register={register("name", {
                  required: "El nombre es requerido",
                })}
                error={errors.name ? errors.name.message : ""}
              />

              <TextInput
                name="lastname"
                placeholder="Apellido"
                label="Apellido"
                type="text"
                register={register("lastname", {
                  required: "El apellido es requerido",
                })}
                styles="w-full"
                error={errors.lastname ? errors.lastname.message : ""}
              />
            </div>

            <TextInput
              name="email"
              placeholder="Correo electrónico"
              label="Correo electrónico"
              type="email"
              register={register("email", {
                required: "El correo es requerido",
              })}
              styles="w-full"
              error={errors.email ? errors.email.message : ""}
            />

            <TextInput
              name="password"
              label="Contraseña"
              placeholder="Contraseña"
              type="password"
              styles="w-full rounded-full"
              labelStyles="ml-2"
              register={register("password", {
                required: "La contraseña es requerida",
              })}
              error={errors.password ? errors.password.message : ""}
            />

            <TextInput
              name="confirmPassword"
              label="Confirmar contraseña"
              placeholder="Confirmar contraseña"
              type="password"
              styles="w-full rounded-full"
              labelStyles="ml-2"
              register={register("confirmPassword", {
                required: "La contraseña es requerida",
                validate: (value) => {
                  const { password } = getValues();
                  if (password != value) return "Las contraseñas no coinciden";
                },
              })}
              error={
                errors.confirmPassword ? errors.confirmPassword.message : ""
              }
            />

            <CustomButton
              type="submit"
              containerStyles={`inline-flex justify-center rounded-md bg-[#e4872c] px-8 py-3 text-sm font-medium text-white outline-none`}
              title="Pre-Registrarse"
            />
          </form>
          <p className="text-ascent-2 text-sm text-center">
            ¿Ya tienes una cuenta?
            <Link
              to="/auth"
              className="text-[#07305d] font-semibold ml-2 cursor-pointer"
            >
              Inicia sesión
            </Link>
          </p>
        </div>
        {/*  right */}
        <div className="w-full lg:w-1/2 h-full lg:flex flex-col items-center justify-center bg-[#07305d] hidden">
          <div className="relative w-full flex items-center justify-center">
            <img
              src={Logo}
              alt="convenios"
              className="w-48 2xl:w64 h-48 2xl:h-64 rounded-full object-cover"
            />

            <div className="absolute flex items-center gap-1 bg-white right-10 top-10 py-2 px-5 rounded-full">
              <BsShare size={14} />
              <span className="text-sm font-medium">Comparte</span>
            </div>

            <div className="absolute flex items-center gap-1 bg-white left-10 top-10 py-2 px-5 rounded-full">
              <ImConnection />
              <span className="text-sm font-medium">Conéctate</span>
            </div>

            <div className="absolute flex items-center gap-1 bg-white left-12 bottom-6 py-2 px-5 rounded-full">
              <AiOutlineInteraction />
              <span className="text-sm font-medium">Interactúa</span>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-white text-base">ASUMAMECO</p>
            <span className="text-sm text-white/80">
            Asociación de Maridos a Mecate Corto
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
