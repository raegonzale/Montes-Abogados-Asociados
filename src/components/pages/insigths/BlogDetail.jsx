import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogsContext } from "../../../context/BlogsContext";




const BlogDetail = () => {
    const { dataBlogId } = useParams();
    const dataBlogs = useContext(BlogsContext);
    const [blogSelected, setBlogSelected] = useState(null);
  
    useEffect(() => {
      const foundBlog = dataBlogs.find(blog => blog.id === parseInt(dataBlogId));
      setBlogSelected(foundBlog);
    }, [dataBlogId, dataBlogs]);
  
    if (!blogSelected) {
      return <div>Blog no encontrado</div>;
    }
  
    return (
      <div>
        <h1>{blogSelected.title}</h1>
        <h1>{blogSelected.title}</h1>
      <img src={blogSelected.img} alt={blogSelected.title} />
      <p>{blogSelected.abstract}</p>
      <p>{blogSelected.date}</p>

        {/* Agrega más detalles del blog aquí */}
      </div>
    );
  };
  
  export default BlogDetail;