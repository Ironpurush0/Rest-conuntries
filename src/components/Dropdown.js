import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {FormControl, Select, MenuItem} from '@material-ui/core'
import {Card} from '../components/Button'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const continents = [
  {
    value: 'Asia',
    label: 'Asia'
  },
  {
    value: 'Africa',
    label: 'Africa'
  },
  {
    value: 'Europe',
    label: 'Europe'
  },
  {
    value: 'Oceania',
    label: 'Oceania'
  },
  {
    value: 'Americas',
    label: 'Americas'
  }
]

function Dropdown({region, handleChange}) {
    const classes = useStyles()

    return (
        <FormControl variant="outlined" className={classes.formControl}>
          <Card variant="normal">
        <Select
          value={region}
          variant="outlined"
          onChange={handleChange}
        >
          <MenuItem value="Filter by region">Filter by region</MenuItem>
          {continents.map(continent => (
            <MenuItem key={continent.label} value={continent.value}>{continent.label}</MenuItem>
          ))}
        </Select>
        </Card>
      </FormControl>
    )
}

export default Dropdown
