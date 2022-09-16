import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
const Blogdetails = () => {
  const { id } = useParams();
  const back=useNavigate()
  const {data:blog,isLoading,error}=useFetch("http://localhost:8000/blogs/"+id);
  const handleDelete=()=>{
    fetch('http://localhost:8000/blogs/'+id,{
      method:"DELETE"
    }).then(
      back('/')
    )
  }
  // console.log(blogs);
  return (
    <div className="blog-details">
        {isLoading && <div>Loading...</div>}
        {error && <div>error</div>}
        {blog && <div className="blogdetails-preview">
                <h2>{blog.title}</h2>
                <p>Author: {blog.author}</p>
                <article>{blog.body}</article> 
                <div className="button">
                  <button onClick={handleDelete}>Delete</button>          
                </div>   
            </div>}
    </div>
  );
};

export default Blogdetails;
