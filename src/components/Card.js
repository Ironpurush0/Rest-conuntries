import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

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

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link style={{textDecoration: 'none', color: 'black'}} to={`country/${data.name}`}>
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
        </Link>
      </CardActionArea>
    </Card>
  );
}

export default MediaCard