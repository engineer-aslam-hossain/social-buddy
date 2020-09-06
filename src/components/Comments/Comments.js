import React, { useState, useEffect } from "react";
import Comment from "../Comment/Comment";

const Comments = props => {
  const [Comments, SetComments] = useState([]);

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${props.postId}`
    )
      .then(res => res.json())
      .then(comments => SetComments(comments));
  }, []);

  return (
    <div>
      {Comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
