import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Auth.css";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <div>
      <h1>To begin with</h1>
      <br></br>
      {posts.map((post) => {
        return (
          <div className="post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Home;
