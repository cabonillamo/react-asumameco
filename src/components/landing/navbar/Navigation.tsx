import Logo from "../../../icons/landing/Logo";
import { Button } from "../ui";
import { useState } from "react";
import {
  HamburgerComponent,
  NavBarComponent,
  SectionComponent,
  MenuComponent,
  MenuItemComponent,
} from ".";

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
        <Logo />
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
