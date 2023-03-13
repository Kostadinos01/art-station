import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomIcon, CustomImage } from "./style";

import downloadIcon from "../../assets/folder-download.png";

interface CustomProps {
  src: string;
}

export default function RenderedImage({ src }: CustomProps) {
  return (
    <Grid>
      <CustomImage src={src}>
        <CustomIcon src={downloadIcon} />
      </CustomImage>
    </Grid>
  );
}
