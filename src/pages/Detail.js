import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FlagDetail from '../components/FlagDetail'
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
        <FlagDetail name={name} response={response} />
      </Container>
    </div>
  );
}
