import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const CustomButton = styled(Button)({
  width: "100px",
  height: "40px",
  cursor: "pointer",
  border: "1px solid #3fe0d0",
  borderRadius: "50px",
  backgroundColor: "#3fe0d0",
  outline: "none",
  transition: "0.8s ease-in-out",
  color: "white",
  fontSize: "16px",
  fontWeight: "bolder",
  display: "flex",
  margin: "auto",
  marginBottom: "15px",
  justifyContent: "center",
  "&:hover": {
    transition: "0.8s ease-in-out",
    backgroundColor: "white",
    border: "1px solid white",
    color: "#3fe0d0",
  },
});

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
  width: "1200px",
  height: "2.5em",
  fontSize: "1rem",
  outline: "none",
  fontWeight: "bolder",
  "@media (max-width: 1200px)": {
    width: "1000px",
  },
  "@media (max-width: 1024px)": {
    width: "600px",
  },
  "@media (max-width: 768px)": {
    width: "400px",
  },
  "@media (max-width: 480px)": {
    width: "200px",
  },
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
  marginBottom: "30px",
});

const CustomHeading = styled("h1")({
  textAlign: "center",
  display: "flex",
  margin: "auto",
  justifyContent: "center",
  color: "white",
  fontSize: "25px",
  fontWeight: "bolder",
  marginTop: "15px",
});

export { CustomInput, CustomLabel, Container, CustomButton, CustomHeading };
