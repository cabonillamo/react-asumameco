import styled from "styled-components";
import Logo from "../Logo";
import Button from "../ui/Button";

const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.body};
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: 5rem;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background-color: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

function Navigation() {
  const scrollTo = (id: string) => {
    let element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <Section id="navigation">
      <NavBar>
        <Logo />
        <Menu>
          <MenuItem onClick={() => scrollTo("home")}>Home</MenuItem>
          <MenuItem onClick={() => scrollTo("about")}>About</MenuItem>
          <MenuItem onClick={() => scrollTo("guide")}>Guide</MenuItem>
          <MenuItem onClick={() => scrollTo("team")}>Team</MenuItem>
          <MenuItem onClick={() => scrollTo("faq")}>Faq</MenuItem>
        </Menu>
        <Button text="Sign In" link="/signin" />
      </NavBar>
    </Section>
  );
}

export default Navigation;
