import { useState } from "react";
import styled from "styled-components";
import TitleComponent from "./Title";
import BackgroundBoxComponent from "./BackgroundBox";
import ButtonAnimateComponent from "./ButtonAnimate";
import { TextComponentOne, TextComponentTwo } from "./Text";
import ButtonComponent from "./Button";
import LinkComponent from "./Link";
import { Box1Component1, Box1Component2 } from "./Box1";
import { InputComponent } from "./Input";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Form = styled.form`
  color: #1b1b1b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 4rem;
`;

function FormComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn, errors: loginErrors } = useAuth();
  const navigate = useNavigate();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const onSubmit = handleSubmit((data) => {
    try {
      signIn(data);
      navigate("/home");
    } catch (error) {
      console.error("Error during sign in:", error);
    }
  });

  return (
    <>
      <BackgroundBoxComponent clicked={click}>
        <ButtonAnimateComponent clicked={click} onClick={handleClick} />
        <Form onSubmit={onSubmit} className="signin">
          {loginErrors &&
            loginErrors.map((err: string, i: number) => (
              <p key={i} className="text-red-500 text-center">
                {err}
              </p>
            ))}
          <TitleComponent>Sign In</TitleComponent>
          {errors.id && <p className="text-red-500">ID is required</p>}
          <InputComponent
            type="id"
            id="idId"
            placeholder="User ID"
            {...register("id", { required: true })}
          />
          {errors.clave && <p className="text-red-500">Password is required</p>}
          <InputComponent
            type="password"
            id="passwordId"
            placeholder="Password"
            {...register("clave", { required: true })}
          />
          <LinkComponent href="#">Forgot Your Password?</LinkComponent>
          <ButtonComponent>Sign In</ButtonComponent>
        </Form>

        <Form className="signup">
          <TitleComponent>Pre Register</TitleComponent>
          <InputComponent
            type="text"
            name="username"
            id="usernameId"
            placeholder="Username"
          />

          <InputComponent
            type="email"
            name="email"
            id="emailId"
            placeholder="Email"
          />
          <InputComponent
            type="password"
            name="password"
            id="passwordId"
            placeholder="Password"
          />
          <LinkComponent href="#" onClick={handleClick}>
            Already have an Account?
          </LinkComponent>
          <ButtonComponent>Pre Register</ButtonComponent>
        </Form>

        <TextComponentOne className="text1" clicked={click}>
          <h1>Welcome!</h1>
          Don't have an account?
          <br />
          <span className="attention">Click Me</span>
          <span className="attention-icon">⤶</span>
        </TextComponentOne>

        <TextComponentTwo className="text2" clicked={click}>
          <h1>Hi There!</h1>
          Already have an account?
          <br />
          <span className="attention">Click Me</span>
          <span className="attention-icon">⤷</span>
        </TextComponentTwo>

        <Box1Component1 clicked={click} />
        <Box1Component2 clicked={click} />
      </BackgroundBoxComponent>
    </>
  );
}

export default FormComponent;
