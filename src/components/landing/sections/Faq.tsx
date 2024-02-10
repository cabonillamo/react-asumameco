import styled from "styled-components";
import Accordion from "../ui/Accordion";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.body};
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.body};
  width: fit-content;
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

const Box = styled.div`
  width: 45%;
`;

function Faq() {
  return (
    <Section>
      <Title>Frequently Asked Questions</Title>
      <Container>
        <Box>
          <Accordion title="Is there a cost associated with the service?">
            No, our service is completely free of charge. We believe in
            providing valuable information and assistance without any financial
            burden on our users.
          </Accordion>
          <Accordion title="How do I get started with your platform?">
            To get started, simply create an account on our platform by
            providing the required information. Once registered, you will have
            access to a variety of features.
          </Accordion>
          <Accordion title="Are there any membership fees or hidden charges?">
            We are committed to transparency. There are no hidden charges or
            membership fees associated with our platform. All relevant costs, if
            any, will be clearly communicated to you.
          </Accordion>
        </Box>
        <Box>
          <Accordion title="How do I reset my password?">
            If you've forgotten your password, you can easily reset it by
            clicking on the 'Forgot Password' link on the login page.
          </Accordion>
          <Accordion title="How secure is my personal information on your platform?">
            We prioritize the security of your information. Our platform employs
            advanced security measures to protect your personal data, ensuring a
            safe and secure user experience.
          </Accordion>
          <Accordion title="What browsers are supported by your platform?">
            Our platform is optimized for use with the latest versions of
            popular browsers such as Google Chrome, Mozilla Firefox, Safari, and
            Microsoft Edge. Ensure your browser is up-to-date for the best
            experience.
          </Accordion>
        </Box>
      </Container>
    </Section>
  );
}

export default Faq;
