import { styled } from "@mui/material/styles";

const Container = styled("div")({
  border: "solid 3px white",
  borderRadius: "20px",
  maxWidth: "fit-content",
  margin: "auto",
  marginTop: "60px",
  marginBottom: "20px",
  padding: "20px",
});

const CustomInput = styled("input")({
  textAlign: "center",
  display: "flex",
  margin: "auto",
  marginTop: "30px",
  marginBottom: "30px",
  justifyContent: "center",
  border: "solid 3px #3fe0d0",
  borderRadius: "50px",
  backgroundColor: "#3fe0d0",
  width: "950px",
  height: "35px",
  fontSize: "15px",
  outline: "none",
  fontWeight: "bolder",
});

const CustomLabel = styled("label")({
  textAlign: "center",
  display: "flex",
  margin: "auto",
  justifyContent: "center",
  color: "white",
  fontSize: "16px",
  fontWeight: "bolder",
  marginTop: "30px",
});

export { CustomInput, CustomLabel, Container };
