import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FlagDetail from '../components/FlagDetail'
import {Container} from '@material-ui/core'
import {DataContext} from '../context/DataContext'

import './Details.css'
import { useParams } from 'react-router-dom';

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

const Details = (props) => {
  const classes = useStyles();

  // Getting the name from the route using the useParams() hook.
  const {name} = useParams()

  // Data coming from the context
  const {data} = useContext(DataContext)

  // Filtering the info by comparing the names.
  const response = data.filter(info => info.name === name)
  

  return (
    <div className={classes.root}>
      <Container>
        <FlagDetail data={response} />
      </Container>
    </div>
  );
}

export default Details