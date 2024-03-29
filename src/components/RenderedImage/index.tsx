import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomImage } from "./style";

interface CustomProps {
  src: string;
}

export default function RenderedImage({ src }: CustomProps) {
  return (
    <Grid>
      {/* <CustomIcon src={downloadIcon} /> */}
      <CustomImage src={src}></CustomImage>
    </Grid>
  );
}
