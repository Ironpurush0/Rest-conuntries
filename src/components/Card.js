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
    maxWidth: '100%'
  },
  media: {
    height: 180,
  },
});

const MediaCard = ({data}) => {
  const classes = useStyles();
  const {population, region, capital, name, flag} = data

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={flag}

        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Capital: {capital}</p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MediaCard