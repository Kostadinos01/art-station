import { styled } from "@mui/material/styles";

const CustomImage = styled("img")({
  width: "1000",
  height: "1000px",
  marginTop: "50px",

  "@media (max-width: 1200px)": {
    width: "800px",
    height: "800px",
  },
  "@media (max-width: 1024px)": {
    width: "600px",
    height: "600px",
  },
  "@media (max-width: 768px)": {
    width: "500px",
    height: "500px",
  },
  "@media (max-width: 480px)": {
    width: "300px",
    height: "300px",
  },
});

const CustomIcon = styled("img")({
  display: "flex",
  position: "relative",
});

export { CustomImage, CustomIcon };
