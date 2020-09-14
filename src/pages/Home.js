import React, {useState, useContext} from 'react'
import './Home.css'

import Header from '../components/Header'
import Card from '../components/Card'
import SearchBar from '../components/SearchBar'
import Dropdown from '../components/Dropdown'

import useHook from '../hooks/useHook'
import {Grid, Container} from '@material-ui/core'
import {Link} from 'react-router-dom'

import {DataContext} from '../context/DataContext'

function Home() {
    // const [region, setRegion] = useState('Filter be region')

    // const baseUrl = 'https://restcountries.eu/rest/v2/all'

    // const {data, loading} = useHook(baseUrl)
    // console.log(data)
    const {currentData} = useContext(DataContext)

    return (
        <>
        <Container maxWidth="lg">
            <div className="form__container">
                <SearchBar />
                <Dropdown />
            </div>
                <Grid container  spacing={10} alignItems="center" justify="center">
                    {currentData.map(country => (
                        <Grid item key={country.name} xs={12} sm={3}>
                            <Link style={{textDecoration: 'none'}} to={{
                            pathname: `/country/${country.name}`,
                            state: country
                        }}>
                                <Card key={country.name} population={country.population} region={country.region} capital={country.capital} name={country.name} image={country.flag} />
                            </Link>
                </Grid>
            ))}        
                </Grid>
            </Container>
        </>
    )
}

export default Home
