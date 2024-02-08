import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "./Button";

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
  }

  .text-1 {
    color: #caa748;
  }

  .text-2 {
    color: #33bb4a;
  }

  .text-3 {
    color: #3107e9;
  }
`;

const Subtitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
  font-weight: 600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;
`;

const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;
`;

function TypeWriterText() {
  return (
    <>
      <Title>
        Our Association Hub
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('<span class="text-1">World Vision</span>')
              .pauseFor(2000)
              .deleteAll()
              .typeString('<span class="text-2">Global Mission</span>')
              .pauseFor(2000)
              .deleteAll()
              .typeString('<span class="text-3">Worldwide Community</span>')
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      <Subtitle>Join us today</Subtitle>
      <ButtonContainer>
        <Button text="Get Started" link="/pre-signup" />
      </ButtonContainer>
    </>
  );
}

export default TypeWriterText;
