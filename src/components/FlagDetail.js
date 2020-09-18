import React from 'react'
import {Grid, Button} from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {StyledButton} from '../components/Button'

const FlagDetail = ({data}) => {

    const history = useHistory()

    return (
        <Grid container spacing={2}>
        <Grid item xs={12}>
        <StyledButton variant="normal">
          <Button 
            onClick={() => {
                history.goBack()
            }} 
            startIcon={<ArrowBackIcon />}
            >
                Back
           </Button>
           </StyledButton>
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
                        <p>Border countries...</p>
                        <div className="buttons__container">
                            {countryInfo.borders.map(response => (
                                <StyledButton variant="normal">
                                <Button key={response}>{response}</Button>
                                </StyledButton>
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
