import React from 'react'
import {Grid, Button} from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const FlagDetail = ({name, response}) => {

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
        {response.map(data => (
            <>
                <Grid item xs={12} sm={6}>
                    <img src={data.flag} alt={name} width="100%" height="100%" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className="info__container">
                    <h1>{data.name}</h1>
                        <div className="header__container">
                            <div className="container1">
                                <p>Native Name: {data.nativeName}</p>
                                <p>Population: {data.population}</p>
                                <p>Region: {data.region}</p>
                                <p>SubRegion: {data.subregion}</p>
                                <p>Capital {data.capital}</p>
                            </div>
                            <div className="container2">
                                {data.topLevelDomain.map(data => (
                                    <p>Top Level Domain: {data}</p>
                                ))}
                                {data.currencies.map(data => (
                                    <p>Currencies: {data.name}</p>
                                ))}
                                {data.languages.map(data => (
                                    <p>Languages: {data.name}</p>
                                ))}
                            </div>
                        </div>
                        <div className="buttons__container">
                        <p>Border countries...</p>
                        {data.borders.map(data => (
                                <Button variant="contained">{data}</Button>
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
