import { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { BlogsContext } from "../../../context/BlogsContext";
import { Link } from "react-router-dom";

export const Blog = () => {
  const dataBlogs = useContext(BlogsContext);
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  const handleChange = (event, value) => {
    setPage(value);
  };

  
  const startIndex = (page - 1) * itemsPerPage;
  const selectedBlogs = dataBlogs.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="h-[1500px] px-6 pt-32 mx-auto flex flex-col items-center xl:pt-28">
      <div className="flex flex-col flex-wrap">
        {selectedBlogs.map((blog) => (
          <Card sx={{ maxWidth: 720, maxHeight: 500, m: 2 }} key={blog.id}>
            <Link to={`/insigths/${blog.id}`}  >
            <CardActionArea>
              <CardMedia
                component="img"
                sx={{ height: "250px" }}
                image={blog.img}
                alt={blog.title}
                loading="lazy"
              />
              <CardContent className="text-blue">
                <Typography
                  gutterBottom
                  component="div"
                  fontSize="16px"
                  lineHeight="1"
                  fontWeight="bold"
                >
                  {blog.title}
                </Typography>
                <Typography className="text-skyBlue" fontSize="14px">
                  {blog.abstract}
                </Typography>
                <Typography className="text-blue text-end" fontSize="11px">
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