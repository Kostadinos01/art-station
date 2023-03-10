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
  const [generatingImage, setGeneratingImage] = useState(false);

  const handleSubmit = async () => {
    try {
      setGeneratingImage(true); // Set generatingImage to true to show the loading spinner
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
      setGeneratingImage(false); // Set generatingImage back to false to hide the loading spinner
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputClear = () => {
    setInput("");
    setImageData(null);
    setGeneratingImage(false); // Set generatingImage back to false to hide the loading spinner
  };

  const handleKeyPress = (event: { keyCode: number }) => {
    if (event.keyCode === 13) {
      handleSubmit(); // Call handleSubmit to trigger the API request and show the loading spinner
    }
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
            onKeyDown={handleKeyPress}
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
        {generatingImage ? (
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
