import styled from "styled-components";
import TypeWriterText from "../ui/TypeWriterText";
import CoverEarth from "../ui/CoverEarth";

const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body};
`;

const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Round = styled.div`
  position: absolute;
  bottom: 5rem;
  right: 90%;
  width: 6rem;
  height: 6rem;

  li {
    width: 100%;
    height: auto;
    list-style: none;
  }
`;

const Circle = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  font-size: ${(props) => props.theme.fontxl};
`;

function Home() {
  return (
    <Section id="home">
      <Container>
        <Box>
          <TypeWriterText />
        </Box>
        <Box>
          <CoverEarth />
        </Box>
        <Round>
          <Circle>&#x2193;</Circle>
        </Round>
      </Container>
    </Section>
  );
}

export default Home;
