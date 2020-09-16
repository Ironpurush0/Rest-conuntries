import React from 'react'
import {Grid, Button} from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const FlagDetail = ({data}) => {

    const history = useHistory()

    return (
        <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button 
            variant="contained" 
            onClick={() => {
                history.goBack()
            }} 
            style={{marginBottom: 25}}
            startIcon={<ArrowBackIcon />}
            >
            Back
           </Button>
        </Grid>
        {data.map(countryInfo => (
            <>
                <Grid item xs={12} sm={6}>
                    <img src={countryInfo.flag} alt={countryInfo.name} width="100%" height="100%" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className="info__container">
                    <h1>{countryInfo.name}</h1>
                        <div className="header__container">
                            <div className="container1">
                                <p>Native Name: {countryInfo.nativeName}</p>
                                <p>Population: {countryInfo.population}</p>
                                <p>Region: {countryInfo.region}</p>
                                <p>SubRegion: {countryInfo.subregion}</p>
                                <p>Capital {countryInfo.capital}</p>
                            </div>
                            <div className="container2">
                                {countryInfo.topLevelDomain.map(response => (
                                    <p key={response}>Top Level Domain: {response}</p>
                                ))}
                                {countryInfo.currencies.map(response => (
                                    <p key={response.name}>Currencies: {response.name}</p>
                                ))}
                                {countryInfo.languages.map(response => (
                                    <p key={response.name}>Languages: {response.name}</p>
                                ))}
                            </div>
                        </div>
                        <div className="buttons__container">
                            <p>Border countries...</p>
                            {countryInfo.borders.map(response => (
                                <Button key={response} variant="contained">{response}</Button>
                            ))}
                        </div>
                    </div>
                </Grid>
            </>
        ))}
      </Grid>
    )
}

export default FlagDetail
