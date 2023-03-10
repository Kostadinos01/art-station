/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
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
import LoadingSpinner from "../LoadingSpinner";
import RenderedImage from "../RenderedImage";

export default function ImageGenerator() {
  const [input, setInput] = useState("");
  const [imageData, setImageData] = useState<Blob | null>(null);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/CompVis/stable-diffusion-v1-4",
        { inputs: input },
        {
          headers: {
            Authorization: "Bearer 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",
            "Content-Type": "application/json",
          },
          responseType: "blob",
        }
      );
      setImageData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputClear = () => {
    setInput("");
    setImageData(null);
  };

  return (
    <Grid>
      <Container onSubmit={(e) => e.preventDefault()}>
        <CustomHeading>🚀 Stable Diffusion 🚀</CustomHeading>

        <form onSubmit={handleSubmit}>
          <CustomInput
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter"}
            placeholder="Type Your Prompts..."
          />
        </form>

        <CustomLabel>
          Through our software we will optimize your prompt.
        </CustomLabel>

        <CustomButton onClick={handleInputClear}>Clear</CustomButton>
      </Container>
      <Grid
        container
        marginBottom="50px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {input.length && imageData === null ? (
          <div>
            <CustomLabel>Generating your image. Please be patient.</CustomLabel>
            <div>
              <LoadingSpinner />
            </div>
          </div>
        ) : (
          imageData && <RenderedImage src={URL.createObjectURL(imageData)} />
        )}
      </Grid>
    </Grid>
  );
}
