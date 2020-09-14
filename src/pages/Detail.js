import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {Container} from '@material-ui/core'
import {DataContext} from '../context/DataContext'
import {useParams} from 'react-router-dom'

import './Details.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid(props) {
  const classes = useStyles();
  const {name} = useParams()
  const {currentData} = useContext(DataContext)

  const response = currentData.filter(data => data.name === name)


  return (
    <div className={classes.root}>
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button variant="contained" style={{marginBottom: 25}}>Back</Button>
        </Grid>
        {response.map(data => (
            <>
                <Grid item xs={12} sm={6}>
                    <img src={data.flag} alt={name} width="100%" height="100%" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className="info__container">
                    <h1>{data.name}</h1>
                        <div className="header__container">
                            <div className="container1">
                                <p>Native Name: {data.nativeName}</p>
                                <p>Population: {data.population}</p>
                                <p>Region: {data.region}</p>
                                <p>SubRegion: {data.subregion}</p>
                                <p>Capital {data.capital}</p>
                            </div>
                            <div className="container2">
                                {data.topLevelDomain.map(data => (
                                    <p>Top Level Domain: {data}</p>
                                ))}
                                {data.currencies.map(data => (
                                    <p>Currencies: {data.name}</p>
                                ))}
                                {data.languages.map(data => (
                                    <p>Languages: {data.name}</p>
                                ))}
                            </div>
                        </div>
                        <div className="buttons__container">
                        <p>Border countries...</p>
                        {data.borders.map(data => (
                                <Button variant="contained">{data}</Button>
                        ))}
                        </div>
                    </div>
                </Grid>
            </>
        ))}
        {/* <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid> */}
      </Grid>
      </Container>
    </div>
  );
}
