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
      <CustomInput
        type="text"
        value={prompts}
        onChange={handleChange}
        onKeyDown={handleEnter}
        placeholder="Type Your Prompts..."
      />
      <CustomLabel>
        Through our software we optimazed your prompt. Feel free to edit.
      </CustomLabel>
      <CustomInput
        type="text"
        value={extendedPrompts}
        onChange={handleChange}
      />
    </Container>
  );
}
