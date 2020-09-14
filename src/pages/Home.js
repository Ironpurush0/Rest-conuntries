import React, {useState, useContext} from 'react'
import './Home.css'

import Card from '../components/Card'
import SearchBar from '../components/SearchBar'
import Dropdown from '../components/Dropdown'
import FlagsList from '../components/FlagsList'

import useHook from '../hooks/useHook'
import {Grid, Container} from '@material-ui/core'
import {Link} from 'react-router-dom'

import {DataContext} from '../context/DataContext'

function Home() {
    const [region, setRegion] = useState('Filter be region')
    const [searchTerm, setSearchTerm] = useState('')

    const baseUrl = 'https://restcountries.eu/rest/v2/all'

    const {data, loading} = useHook(baseUrl)
    console.log(data)
    // const {currentData} = useContext(DataContext)

    return (
        <>
        <Container maxWidth="lg">
            <div className="form__container">
                <SearchBar />
                <Dropdown region={region} />
            </div>
                <FlagsList data={data} loading={loading} />
            </Container>
        </>
    )
}

export default Home
