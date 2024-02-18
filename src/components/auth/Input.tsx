import styled from "styled-components";

const Input = styled.input`
  background-color: #fff;
  border: none;
  border-bottom: 2px solid #053271;

  padding: 1rem 2rem;
  margin: 0.5rem 0;
  width: 100%;

  &:focus {
    outline: none;
    border: none;
    border: 2px solid #053271;
  }
`;

function InputComponent({
  type,
  name,
  id,
  placeholder,
}: {
  type: string;
  name: string;
  id: string;
  placeholder: string;
}) {
  return <Input type={type} name={name} id={id} placeholder={placeholder} />;
}

export default InputComponent;
