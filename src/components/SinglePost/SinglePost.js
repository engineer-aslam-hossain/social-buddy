import React, { useEffect, useState } from "react";
import Comments from "../Comments/Comments";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    margin: "20px auto",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    border: "none",
    background: "linear-gradient(to bottom, #ff5d8f, #fadde1)",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
  },
  heading: {
    fontSize: 30,
    textAlign: "center",
    color: "white",
    fontWeight: 600,
    borderBottom: "3px solid #ff5d8f",
    width: "250px",
    margin: "0 auto",
  },
  body: {
    textAlign: "center",
  },
});
const SinglePost = () => {
  const { postId } = useParams();
  const [SinglePost, SetSinglePost] = useState([]);

  const classes = useStyles();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(res => res.json())
      .then(post => SetSinglePost(post));
  }, []);

  return (
    <div>
      <Typography className={classes.heading} gutterBottom>
        Single Post
      </Typography>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            Post ID : ✍️ {postId}
          </Typography>
          <Typography className={classes.title} gutterBottom>
            Post Title : 👉 {SinglePost.title}
          </Typography>
          <Typography className={classes.body} variant='body2' component='p'>
            Post Body : 👉 {SinglePost.body}
            <br />
          </Typography>
        </CardContent>
      </Card>
      <Typography className={classes.heading} gutterBottom>
        Comments Are
      </Typography>
      <Comments postId={postId} />
    </div>
  );
};
export default SinglePost;
