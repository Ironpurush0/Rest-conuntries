import React from 'react'
import {Grid} from '@material-ui/core'


import Card from '../components/Card'

const FlagsList = ({data}) => {
    // console.log(data)

    return (
            <Grid container spacing={10}>
                {data.map(countryData => (
                   <Grid 
                   item
                   key={countryData.name} 
                   xs={12} 
                   sm={3}>
                    <Card data={countryData} />
                 </Grid> 
                ))}
            </Grid>
    )
}

export default FlagsList
