import { styled } from "@mui/material/styles";

const CustomImage = styled("img")({
  width: "400",
  height: "400px",
  marginTop: "50px",
  "@media (max-width: 1200px)": {
    width: "400",
    height: "400px",
  },
  "@media (max-width: 1024px)": {
    width: "400",
    height: "400px",
  },
  "@media (max-width: 768px)": {
    width: "300",
    height: "300px",
  },
  "@media (max-width: 480px)": {
    width: "300",
    height: "300px",
  },
});

export { CustomImage };
