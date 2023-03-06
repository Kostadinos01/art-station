import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomImage } from "./style";
import axios from "axios";

interface CustomProps {
  src: string;
}

const data = new FormData();
data.append("focusContent", "true");
// data.append("styleImage");
// data.append("contentImage");

const options = {
  method: "POST",
  url: "https://ai-art-maker.p.rapidapi.com/remix-art",
  headers: {
    "X-RapidAPI-Key": "5c2b228bf7msh46b87d63844f7fep1e118ejsn760d07aef0f3",
    "X-RapidAPI-Host": "ai-art-maker.p.rapidapi.com",
  },
  data: data,
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

export default function RenderedImage({ src }: CustomProps) {
  return (
    <Grid>
      <CustomImage src={src} />
    </Grid>
  );
}
