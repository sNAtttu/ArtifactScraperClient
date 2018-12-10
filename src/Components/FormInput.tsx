import React from "react";
import {
  FormInput as PostDeckFormInput,
  FormInputContainer,
  FormLabel
} from "../Styled/PostDeckForm";
import { DraftType } from "../Types/Draft";

const FormInput = ({
  labelText,
  inputType,
  value,
  handleValueChange
}: {
  labelText: string;
  inputType: string;
  value: string | number | DraftType;
  handleValueChange: (event: any) => void;
}) => {
  return (
    <FormInputContainer>
      <FormLabel>{labelText}</FormLabel>
      <PostDeckFormInput
        type={inputType}
        value={value}
        onChange={handleValueChange}
      />
    </FormInputContainer>
  );
};

export default FormInput;
