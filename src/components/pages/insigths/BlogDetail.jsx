import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogsContext } from "../../../context/BlogsContext";
import { HeaderTwo } from "../../common/HeaderTwo";
import { Contact } from "../../common/Contact";
import { Form } from "../../common/Form";
import { Footer } from "../../common/Footer";

const BlogDetail = () => {
  const { dataBlogId } = useParams();
  const dataBlogs = useContext(BlogsContext);
  const [blogSelected, setBlogSelected] = useState(null);

  useEffect(() => {
    const foundBlog = dataBlogs.find(
      (blog) => blog.id === parseInt(dataBlogId)
    );
    setBlogSelected(foundBlog);
  }, [dataBlogId, dataBlogs]);

  if (!blogSelected) {
    return <div>Blog no encontrado</div>;
  }

  return (
    <div>
      <HeaderTwo />

      <div className="px-6 h-auto pt-32 flex flex-col xl:px-0">
        <div className="flex flex-col items-center xl:justify-evenly xl:flex xl:flex-row">
          <img src={blogSelected.img} alt={blogSelected.title} />
          <h1 className=" pt-6 leading-none drop-shadow-xl max-w-[600px] font-abc2 font-black text-center text-blue xl:text-end text-[50px] items-center justify-center">
            {blogSelected.title}
          </h1>
        </div>

        <div className="text-[20px] text-center text-skyBlue leading-tight flex flex-col items-center justify-center py-6 space-y-5 xl:px-[200px]">
          <p>{blogSelected.content1}</p>
          <p>{blogSelected.content2}</p>
          <p>{blogSelected.content3}</p>
          <p>{blogSelected.content4}</p>
          <div className="self-stretch">
          <p className="font-black text-[15px] text-right">{blogSelected.author}</p>
          <p className="font-ligth text-[15px] text-right">{blogSelected.date}</p>
          </div>
        </div>

        <Contact />
        <Form />
        <Footer />
      </div>
    </div>
  );
};

export default BlogDetail;