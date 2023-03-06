import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomImage } from "./style";

interface CustomProps {
  src: string;
}

export default function RenderedImage({ src }: CustomProps) {
  return (
    <Grid xs={3}>
      <CustomImage src={src} />
    </Grid>
  );
}
