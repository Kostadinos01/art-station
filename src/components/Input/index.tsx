import { useState } from "react";
import { Container, CustomInput, CustomLabel } from "./style";

export default function Input() {
  const [prompts, setPrompts] = useState<string>("");
  const [extendedPrompts, setExtendedPrompts] = useState<string>("");

  const handleEnter = (event: any) => {
    if (event.key === "Enter") {
      setPrompts("");
      setExtendedPrompts("This is the extended version of the user prompts");
      console.log("Enter Key Pressed");
    }
  };

  const handleChange = (event: any) => {
    setPrompts(event.target.prompts);
    setExtendedPrompts(event.target.extendedPrompts);
  };

  return (
    <Container>
      <CustomLabel>
        The first input is for you to type your own prompts.
      </CustomLabel>
      <CustomInput
        type="text"
        value={prompts}
        onChange={handleChange}
        onKeyDown={handleEnter}
        placeholder="Type Your Prompts..."
      />
      <CustomLabel>
        The second input will extend the prompts that you provided in the first
        input. Also you have the option to edit it in case you don't like some
        of the extra prompts.
      </CustomLabel>
      <CustomInput
        type="text"
        value={extendedPrompts}
        onChange={handleChange}
      />
    </Container>
  );
}
