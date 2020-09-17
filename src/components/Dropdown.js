import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {FormControl, InputLabel, Select, MenuItem} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

function Dropdown(props) {
    const classes = useStyles()

    return (
        <FormControl variant="outlined" className={classes.formControl}>
        {/* <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel> */}
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={props.region}
          variant="filled"
          onChange={props.handleChange}
          placeholder="Filter"
        >
          <MenuItem value="">
            <em>Filter by region</em>
          </MenuItem>
          <MenuItem value={10}>Asia</MenuItem>
          <MenuItem value={20}>Africa</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    )
}

export default Dropdown
