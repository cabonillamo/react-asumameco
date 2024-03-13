
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

const ImageContainer = styled.div`
 width: 100px;
 height: 100px;
 display: flex;
 justify-content: center;
 align-items: center;
 margin-right: 1rem;

`;


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
      <ImageContainer>
        <img src={logo} alt="logo" />
        </ImageContainer>
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
