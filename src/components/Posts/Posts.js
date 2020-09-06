import React, { useState, useEffect } from "react";
import Post from "../Post/Post";

const Posts = () => {
  const [posts, SetPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(posts => SetPosts(posts));
  }, []);
  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
