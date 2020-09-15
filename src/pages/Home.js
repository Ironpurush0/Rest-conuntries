import React, {useState, useContext} from 'react'
import './Home.css'

import Card from '../components/Card'
import SearchBar from '../components/SearchBar'
import Dropdown from '../components/Dropdown'
import FlagsList from '../components/FlagsList'
import SingleCard from '../components/SingleCard'

import useHook from '../hooks/useHook'
import {Container} from '@material-ui/core'

// import {DataContext} from '../context/DataContext'

function Home() {
    const [region, setRegion] = useState('Filter be region')
    const [searchTerm, setSearchTerm] = useState('')

    const baseUrl = 'https://restcountries.eu/rest/v2/all'

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const {data, loading} = useHook(baseUrl)


    return (
        <>
        <Container maxWidth="lg">
            <div className="form__container">
                <SearchBar value={searchTerm} onChange={handleChange} />
                <Dropdown region={region} />
            </div>
            {searchTerm ? <SingleCard data={data} loading={loading} /> : <FlagsList data={data} loading={loading} />}
            </Container>
        </>
    )
}

export default Home
