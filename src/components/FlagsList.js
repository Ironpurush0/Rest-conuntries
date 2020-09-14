import React from 'react'
import {Grid} from '@material-ui/core'
import {Link} from 'react-router-dom'

import Card from '../components/Card'

const FlagsList = ({data, loading}) => {
    if(loading){
        return <h1>Loading..</h1>
    }

    return (
            <Grid container  spacing={10} alignItems="center" justify="center">
                    {data.map(country => (
                        <Grid 
                            item 
                            key={country.name} 
                            xs={12} 
                            sm={3}>
                            <Link 
                                style={{textDecoration: 'none'}} 
                                to={{
                                    pathname: `/country/${country.name}`,
                                    state: data
                                }}
                        >
                            <Card 
                                key={country.name} 
                                population={country.population} 
                                region={country.region} 
                                capital={country.capital} 
                                name={country.name} 
                                image={country.flag} 
                            />
                            </Link>
                        </Grid>
                    ))}
            </Grid>
    )
}

export default FlagsList
