import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    margin: "20vh 40px",
    padding: "40px",
  },
  details: {
    margin: "0 auto",
  },
}));
const NoMatch = () => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent>
            <Typography component='h5' variant='h5' gutterBottom>
              Post Details ❌ !!! 404 ERROR !!! ❌ Path Cannot Find..
            </Typography>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default NoMatch;
