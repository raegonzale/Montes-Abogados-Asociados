import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { CardActionArea, CardActions } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ProfileData } from "../../../constants";
import { blue } from "@mui/material/colors";

export const Profile = () => {



  const handleLinkedInClick = (linkedinURL) => {
    window.open(linkedinURL, '_blank');

  };
  

  return (
    <div className="w-full mx-auto flex justify-center items center">
      <div className="xl:my-5 xl:h-[800px] xl:w-[800px] xl:grid xl:grid-cols-3 xl:items-center xl:justify-items-center">
        {ProfileData.map((item, index) => (
          <Card className="" sx={{ maxWidth: 230, maxHeight: 400 }} key={index}>
            <CardActionArea className="">
              <CardMedia
                component="img"
                sx={{ height: "280px" }}
                image={item.backgroundImage}
                alt="Profile"
                className=""
              />
              <CardContent className=" h-[60px] flex flex-col justify-center">
                <Typography
                  className="text-skyBlue"
                  lineHeight="1"
                  fontWeight="bold"
                  fontSize="20px"
                  gutterBottom
                  component="div"
                >
                  {item.name}
                </Typography>
                <Typography
                  className=""
                  lineHeight="1"
                  fontSize="13px"
                  color="text.secondary"
                >
                  {item.profile}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="flex pt-0 justify-end h-[33px]">
              <IconButton
                size="medium"
                aria-label="Linkedin"
                onClick={() => handleLinkedInClick(item.linkedin)}
                sx={{ color: blue[700] }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};
