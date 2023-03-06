import { useState } from "react";
import { Container, CustomInput, CustomLabel } from "./style";

export default function Input() {
  const [prompts, setPrompts] = useState<string>("");

  const handleEnter = (event: any) => {
    event.preventDefault();

    if (event.key === "Enter" && prompts.length) {
      setPrompts("");
    }
  };

  return (
    <Container>
      <CustomLabel>
        The first input is for you to type your own prompts.
      </CustomLabel>
      <CustomInput
        onKeyPress={handleEnter}
        placeholder="Type Your Prompts..."
      />
      <CustomLabel>
        The second input will extend the prompts that you provided in the first
        input. Also you have the option to edit it in case you don't like some
        of the prompts.
      </CustomLabel>
      <CustomInput />
    </Container>
  );
}
