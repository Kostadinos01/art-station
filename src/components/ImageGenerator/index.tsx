import { useState } from "react";
import { Container, CustomInput, CustomButton } from "./style";
import axios from "axios";
import { Grid } from "@mui/material";
import RenderedImage from "../RenderedImage";

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState<string | number>();
  const [image, setImage] = useState<string | number>();

  const generate = async (prompt: any) => {
    const result = await axios.get(`http://127.0.0.1:8000/?prompt=${prompt}`);
    setImage(result.data);
  };

  const handleEnter = (event: any) => {
    if (event.key === "Enter") {
      setPrompt("");

      console.log("Enter Key Pressed");
    }
  };

  const handleChange = (event: any) => {
    setPrompt(event.target.value);
  };

  return (
    <Grid>
      <Container>
        <CustomInput
          type="text"
          value={prompt}
          onChange={handleChange}
          onKeyDown={handleEnter}
          placeholder="Type Your Prompts..."
        />
        {/* <CustomLabel>
          Through our software we optimazed your prompt. Feel free to edit.
        </CustomLabel> */}
        {/* <CustomInput
          type="text"
          value={extendedPrompts}
          onChange={handleChange}
        /> */}
        <CustomButton onClick={() => generate(prompt)}>Generate</CustomButton>
      </Container>
      <Grid
        container
        rowSpacing={0}
        columnSpacing={3}
        marginBottom="50px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        xs="auto"
      >
        {image ? (
          <>
            <RenderedImage src={`data:image/png;base64,${image}`} />
            <RenderedImage src={`data:image/png;base64,${image}`} />
            <RenderedImage src={`data:image/png;base64,${image}`} />
            <RenderedImage src={`data:image/png;base64,${image}`} />
          </>
        ) : null}
      </Grid>
    </Grid>
  );
}
