import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

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
  body: {
    textAlign: "center",
  },
});
const Post = props => {
  const { title, body, id } = props.post;

  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            Post ID : {id}
          </Typography>
          <Typography className={classes.title} gutterBottom>
            Post Title : 👉 {title}
          </Typography>
          <Typography className={classes.body} variant='body2' component='p'>
            Post Body : 👉 {body}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/single_post/${id}`}>
            <Button variant='contained' color='primary'>
              See More...
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
