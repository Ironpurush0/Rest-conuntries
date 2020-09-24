import React from 'react'
import {Container, Grid} from '@material-ui/core'


import Card from '../components/Card'

const FlagsList = ({data}) => {

    return (
        <Container>
            <Grid container spacing={5}>
                {data.map(countryData => (
                   <Grid 
                   item
                   key={countryData.name} 
                   xs={12} 
                   lg={3}>
                    <Card data={countryData} />
                 </Grid> 
                ))}
            </Grid>
        </Container>
    )
}

export default FlagsList
