import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isloading, setisloading] = useState(false);
  const back = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setisloading(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setisloading(false);
      back("/");
    });
  };
  return (
    <div className="create">
      <h2>Add Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Content:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Author:</label>
        {/* <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Author-1">Author 1</option>
          <option value="Author-2">Author 2</option>
          <option value="Author-3">Author 3</option>
        </select> */}
        <input 
        type="text"
        required
        value={author}
        onChange={(e)=>setAuthor(e.target.value)}
        />
        <div className="btn">
          {!isloading && <button className="btn">Add Blog</button>}
          {isloading && <button disabled>Adding...</button>}
        </div>
      </form>
    </div>
  );
};

export default Create;
