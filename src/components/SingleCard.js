import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 340
  },
  media: {
    height: 180,
  },
});

const SingleCard = ({data, loading}) => {
  const classes = useStyles();

  if(loading){
      return <h1>Loading...</h1>
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.flag}

        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {data.name}
          </Typography>
            <p>Population: {data.population}</p>
            <p>Region: {data.region}</p>
            <p>Capital: {data.capital}</p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default SingleCard