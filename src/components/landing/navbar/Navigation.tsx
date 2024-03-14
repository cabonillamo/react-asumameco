
import { Button } from "../ui";
import { useState } from "react";
import {
  HamburgerComponent,
  NavBarComponent,
  SectionComponent,
  MenuComponent,
  MenuItemComponent,
} from ".";

import logo from "../../../assets/landing/Logo.jpg";
import styled from 'styled-components';



const ImageContainer = styled.img`
  width: 130px;
  height: 130px; /* Ajusta la altura para que sea igual al ancho */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  margin-top: 5.2rem;
  border-radius: 50%; /* Cambia el radio del borde a 50% para hacerlo redondo */
  background-color: #f0f0f0; /* Cambia el color de fondo */
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3); /* Ajusta la sombra */
  transition: all 0.3s ease; /* Agrega una transición suave */
  
  /* Efecto al pasar el ratón */
  &:hover {
    transform: scale(1.05); /* Hace que el logo se agrande un poco al pasar el ratón */
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2); /* Aumenta el tamaño de la sombra */
  }
`;


// Puedes modificar los valores de los colores y las sombras según tus preferencias.


// Puedes modificar los valores de los colores y las sombras según tus preferencias.



function Navigation() {
  const [click, setClick] = useState<boolean>(false);
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    setClick(!click);
  };

  return (
    <SectionComponent id="navigation">
      <NavBarComponent>
      <ImageContainer src={logo} alt="logo" />
        <HamburgerComponent
          click={click}
          setClick={() => setClick(!click)}
        >
          &nbsp;
        </HamburgerComponent>

        <MenuComponent click={click}>
          <MenuItemComponent onClick={() => scrollTo("home")}>
            Inicio
          </MenuItemComponent>
          <MenuItemComponent onClick={() => scrollTo("about")}>
            Acerca de
          </MenuItemComponent>
          <MenuItemComponent onClick={() => scrollTo("guide")}>
            Guia
          </MenuItemComponent>
          <MenuItemComponent onClick={() => scrollTo("team")}>
            Equipo
          </MenuItemComponent>
          <MenuItemComponent onClick={() => scrollTo("faq")}>
            Preguntas Frecuentes
          </MenuItemComponent>
          <MenuItemComponent>
            <div className="mobile">
              <Button text="Iniciar sesión" to="/auth" />
            </div>
          </MenuItemComponent>
        </MenuComponent>
        <div className="desktop">
          <Button text="Iniciar sesión" to="/auth" />
        </div>
      </NavBarComponent>
    </SectionComponent>
  );
}

export default Navigation;
