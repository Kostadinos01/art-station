import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import RenderedImage from "../components/RenderedImage";

export default function Images() {
  return (
    <Box sx={{ maxWidth: "100%" }}>
      <Grid
        container
        marginBottom={10}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <RenderedImage src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fc4.wallpaperflare.com%2Fwallpaper%2F410%2F867%2F750%2Fvector-forest-sunset-forest-sunset-forest-wallpaper-preview.jpg&imgrefurl=https%3A%2F%2Fwww.wallpaperflare.com%2Fsearch%3Fwallpaper%3Ddark&tbnid=i6wwx9OOtUncrM&vet=12ahUKEwi-4u_u78b9AhUBlaQKHdFsA98QMygEegUIARDqAQ..i&docid=-P5RQ6NQWPdTGM&w=728&h=410&itg=1&q=1080p%20wallpapers&client=ubuntu&ved=2ahUKEwi-4u_u78b9AhUBlaQKHdFsA98QMygEegUIARDqAQ" />
        <RenderedImage src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F13192.jpg&imgrefurl=https%3A%2F%2Fwallpaperaccess.com%2F1080p&tbnid=u_eoUwTX9-_hnM&vet=12ahUKEwi-4u_u78b9AhUBlaQKHdFsA98QMygUegUIARCKAg..i&docid=wR0mmfz2Qw5ZfM&w=1920&h=1080&q=1080p%20wallpapers&client=ubuntu&ved=2ahUKEwi-4u_u78b9AhUBlaQKHdFsA98QMygUegUIARCKAg" />
        <RenderedImage src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.alphacoders.com%2F265%2F265693.png&imgrefurl=https%3A%2F%2Fwall.alphacoders.com%2Fby_sub_category.php%3Fid%3D234214%26name%3DMagic%253A%2BThe%2BGathering%2BWallpapers&tbnid=0Gc5TvrxNbYnbM&vet=12ahUKEwi-4u_u78b9AhUBlaQKHdFsA98QMygLegUIARD4AQ..i&docid=9s9yvi3dXT71kM&w=2836&h=1696&q=1080p%20wallpapers&client=ubuntu&ved=2ahUKEwi-4u_u78b9AhUBlaQKHdFsA98QMygLegUIARD4AQ" />
        <RenderedImage src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fc4.wallpaperflare.com%2Fwallpaper%2F108%2F140%2F869%2Fdigital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg&imgrefurl=https%3A%2F%2Fwww.wallpaperflare.com%2Fsearch%3Fwallpaper%3Dspace&tbnid=zwP2rcLPAh_4fM&vet=12ahUKEwi-4u_u78b9AhUBlaQKHdFsA98QMygPegUIARCAAg..i&docid=j_t-8yGjhl5X9M&w=728&h=410&itg=1&q=1080p%20wallpapers&client=ubuntu&ved=2ahUKEwi-4u_u78b9AhUBlaQKHdFsA98QMygPegUIARCAAg" />
      </Grid>
    </Box>
  );
}
