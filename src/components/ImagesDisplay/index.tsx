import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { CustomImage } from "./style";

export default function ImagesDisplay() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
          <CustomImage href="https://www.google.com/imgres?imgurl=https%3A%2F%2Fc4.wallpaperflare.com%2Fwallpaper%2F410%2F867%2F750%2Fvector-forest-sunset-forest-sunset-forest-wallpaper-preview.jpg&imgrefurl=https%3A%2F%2Fwww.wallpaperflare.com%2Fsearch%3Fwallpaper%3Ddark&tbnid=i6wwx9OOtUncrM&vet=12ahUKEwjNiZLs6sb9AhWn_bsIHbo7DLsQMygEegUIARDqAQ..i&docid=-P5RQ6NQWPdTGM&w=728&h=410&itg=1&q=1080p%20wallpapers&client=ubuntu&ved=2ahUKEwjNiZLs6sb9AhWn_bsIHbo7DLsQMygEegUIARDqAQ" />
        </Grid>
        <Grid xs={6}>
          <CustomImage href="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.wallpapersafari.com%2F24%2F95%2F0fDKTG.jpeg&imgrefurl=https%3A%2F%2Fwallpapersafari.com%2Fhd-1080p-wallpapers%2F&tbnid=_lPoU2RxCKh72M&vet=12ahUKEwjNiZLs6sb9AhWn_bsIHbo7DLsQMygJegUIARD0AQ..i&docid=NxE4NS6e9vfWTM&w=1680&h=1050&q=1080p%20wallpapers&client=ubuntu&ved=2ahUKEwjNiZLs6sb9AhWn_bsIHbo7DLsQMygJegUIARD0AQ" />
        </Grid>
        <Grid xs={6}>
          <CustomImage href="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwallpaperset.com%2Fw%2Ffull%2Fc%2Fb%2F3%2F30336.jpg&imgrefurl=https%3A%2F%2Fwallpaperset.com%2Fhd-wallpapers-for-desktop-1080p&tbnid=iDrNO0xsQP5IkM&vet=12ahUKEwjNiZLs6sb9AhWn_bsIHbo7DLsQMygTegUIARCIAg..i&docid=mp4F9ThIiWEvQM&w=1920&h=1080&q=1080p%20wallpapers&client=ubuntu&ved=2ahUKEwjNiZLs6sb9AhWn_bsIHbo7DLsQMygTegUIARCIAg" />
        </Grid>
        <Grid xs={6}>
          <CustomImage href="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwallpapercave.com%2Fwp%2F45zDOg8.jpg&imgrefurl=https%3A%2F%2Fwallpapercave.com%2Fbest-1080p-wallpaper&tbnid=37b86NFHGZPqiM&vet=12ahUKEwjNiZLs6sb9AhWn_bsIHbo7DLsQMygNegUIARD8AQ..i&docid=wTYKBdWHFHcLwM&w=1920&h=1080&q=1080p%20wallpapers&client=ubuntu&ved=2ahUKEwjNiZLs6sb9AhWn_bsIHbo7DLsQMygNegUIARD8AQ" />
        </Grid>
      </Grid>
    </Box>
  );
}
