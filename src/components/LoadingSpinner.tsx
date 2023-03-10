import React from "react";
import { styled, keyframes } from "@mui/material/styles";
import { CircularProgress } from "@mui/material";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const StyledSpinner = styled(CircularProgress)`
  && {
    color: #3fe0d0;
    animation: ${spin} 1s linear infinite;
  }
`;

const LoadingSpinner = () => {
  return (
    <SpinnerWrapper>
      <StyledSpinner size={40} thickness={5} />
    </SpinnerWrapper>
  );
};

export default LoadingSpinner;
