import { useState } from "react";
import { Container, CustomInput, CustomLabel, CustomButton } from "./style";
import axios from "axios";
import { Grid } from "@mui/material";

export default function Input() {
  const [prompts, setPrompts] = useState<string | number>("");
  const [extendedPrompts, setExtendedPrompts] = useState<string | number>("");

  const handlePrompts = async () => {
    const apiUrl = "https://api.replicate.com/v1/predictions";
    const authToken = "r8_3yWtRhM7kL4D32hG7B9jbONK8ODMunK1HklMm";

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${authToken}`,
    };

    // const data = {
    //   version:
    //     "db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf",
    //   input: {
    //     prompt: "a rain forest",
    //   },
    // };

    try {
      const response = await axios.post(apiUrl, { headers });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEnter = (event: any) => {
    if (event.key === "Enter") {
      setPrompts("");
      setExtendedPrompts("This is the extended version of the user prompts");
      handlePrompts();
      console.log("Enter Key Pressed");
    }
  };

  const handleChange = (event: any) => {
    setPrompts(event.target.prompts);
    setExtendedPrompts(event.target.extendedPrompts);
  };

  return (
    <Grid>
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
        <CustomButton>Create</CustomButton>
      </Container>
    </Grid>
  );
}
