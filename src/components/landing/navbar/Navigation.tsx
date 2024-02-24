import Logo from "../../../icons/landing/Logo";
import Button from "../ui/Button";
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
    let element = document.getElementById(id);
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
          onClick={() => console.log("Hamburger clicked")}
        >
          &nbsp;
        </HamburgerComponent>

        <MenuComponent click={click}>
          <MenuItemComponent onClick={() => scrollTo("home")}>
            Home
          </MenuItemComponent>
          <MenuItemComponent onClick={() => scrollTo("about")}>
            About
          </MenuItemComponent>
          <MenuItemComponent onClick={() => scrollTo("guide")}>
            Guide
          </MenuItemComponent>
          <MenuItemComponent onClick={() => scrollTo("team")}>
            Team
          </MenuItemComponent>
          <MenuItemComponent onClick={() => scrollTo("faq")}>
            Faq
          </MenuItemComponent>
          <MenuItemComponent>
            <div className="mobile">
              <Button text="Sign In" to="/auth" />
            </div>
          </MenuItemComponent>
        </MenuComponent>
        <div className="desktop">
          <Button text="Sign In" to="/auth" />
        </div>
      </NavBarComponent>
    </SectionComponent>
  );
}

export default Navigation;
