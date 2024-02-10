import styled from "styled-components";
import Banner from "../ui/Banner";
import Logo from "../Logo";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  color: ${(props) => props.theme.text};
  display: flex;
  /* justify-content: center;
  align-items: center; */
  flex-direction: column;
`;

const Container = styled.div`
  padding-bottom: 20px;
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.text};
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MenuItems = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
`;
const Item = styled.li`
  width: fit-content;
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

const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Footer() {
  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <Logo />
        </Left>
        <MenuItems>
          <Item>Home</Item>
          <Item>About</Item>
          <Item>Guide</Item>
          <Item>Team </Item>
          <Item>FAQ</Item>
        </MenuItems>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Q-Easy. All rights reserved.
        </span>
      </Bottom>
    </Section>
  );
}

export default Footer;
