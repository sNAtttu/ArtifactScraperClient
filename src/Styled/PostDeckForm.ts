import styled from "styled-components";

const FormInputContainer = styled.div`
  display: grid;
`;

const FormLabel = styled.label`
  font-size: 1.5em;
  text-align: left;
`;

const FormInput = styled.input`
  height: 1.5em;
`;

const FormSubmitButton = styled.input`
  background-color: cornflowerblue;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 1em;
  width: 100%;

  &:hover {
    opacity: 0.8;
  }
`;

export { FormLabel, FormInput, FormInputContainer, FormSubmitButton };
