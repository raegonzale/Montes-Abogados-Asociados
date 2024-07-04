import { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { BlogsContext } from "../../../context/BlogsContext";
import { Link } from "react-router-dom";
import useTheme from "../../../constants/useTheme";

export const Blog = () => {
  const dataBlogs = useContext(BlogsContext);
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;
  const { theme } = useTheme();
  const handleChange = (event, value) => {
    setPage(value);
  };
  const startIndex = (page - 1) * itemsPerPage;
  const selectedBlogs = dataBlogs.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div
      style={{ background: theme.background }}
      className="h-[1500px] px-6 pt-5 mx-auto flex flex-col items-center xl:h-[1300px] xl:pt-0"
    >
      <div className="flex flex-col flex-wrap">
        {selectedBlogs.map((blog) => (
          <Card sx={{ maxWidth: 720, maxHeight: 500, m: 2 }} key={blog.id}>
            <Link to={`/insigths/${blog.id}`}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  sx={{ height: "250px" }}
                  image={blog.img}
                  alt={blog.title}
                  loading="lazy"
                />
                <CardContent style={{ background: theme.backgroundAcordion }}>
                  <Typography
                    gutterBottom
                    component="div"
                    fontSize="20px"
                    lineHeight="1"
                    fontWeight="bold"
                    style={{ color: theme.primary }}
                  >
                    {blog.title}
                  </Typography>
                  <Typography
                    style={{ color: theme.textPrimary }}
                    fontSize="15px"
                  >
                    {blog.abstract}
                  </Typography>
                  <Typography 
                    className="flex justify-end"
                    fontWeight="bold"
                    style={{ color: theme.primary }} 
                    fontSize="12px">
                    {blog.date}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        ))}
      </div>
      <Pagination
        count={Math.ceil(dataBlogs.length / itemsPerPage)}
        page={page}
        onChange={handleChange}
        color="primary"
        className="mt-4"
      />
    </div>
  );
};
