import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { ProfileData } from "../../../constants";

export const Profile = () => {
  return (
    <div className="h-[750px] w-[900px] xl:justify-evenly xl:grid xl:grid-cols-3 xl: items-center">
      {ProfileData.map((item, index) => (
        <Card className="" sx={{ maxWidth: 250, maxHeight: 360,}} key={index}>
          <CardActionArea className="border border-blue">
            <CardMedia
              component="img"
              sx={{height:"250px"}}
              image={item.backgroundImage}
              alt="prueba"
              
            />
            <CardContent className=" h-[70px] flex flex-col justify-center">
              <Typography className=" leading-none text-skyBlue" gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography className=" " variant="body2" color="text.secondary">
              {item.profile}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className="flex items-center h-[30px]">
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};
