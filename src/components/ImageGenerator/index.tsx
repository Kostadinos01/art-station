import { useState } from "react";
import {
  Container,
  CustomInput,
  CustomButton,
  CustomLabel,
  CustomHeading,
} from "./style";
import axios from "axios";
import { Grid } from "@mui/material";
import RenderedImage from "../RenderedImage";

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const generate = async (prompt: any) => {
    try {
      const response = await axios.get(
        `https://api-inference.huggingface.co/models/CompVis/stable-diffusion-v1-4/?prompt=${prompt}`,
        {
          headers: {
            Authorization: "Bearer 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",
          },
          responseType: "blob",
        }
      );
      setImage(URL.createObjectURL(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event: any) => {
    setPrompt(event.target.value);
  };

  return (
    <Grid>
      <Container onSubmit={(e) => e.preventDefault()}>
        <CustomHeading>🚀 Stable Diffusion 🚀</CustomHeading>
        <CustomInput
          type="text"
          value={prompt}
          onChange={handleChange}
          placeholder="Type Your Prompts..."
        />
        <CustomLabel>
          Through our software we will optimize your prompt.
        </CustomLabel>
        <CustomButton onClick={() => generate(prompt)}>Generate</CustomButton>
      </Container>
      <Grid
        container
        marginBottom="50px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {image ? (
          <>
            <RenderedImage src={`${image}`} />
            <RenderedImage src={`${image}`} />
            <RenderedImage src={`${image}`} />
            <RenderedImage src={`${image}`} />
          </>
        ) : null}
      </Grid>
    </Grid>
  );
}
