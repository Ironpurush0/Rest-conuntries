import React from 'react'
import './Header.css'
import {Button} from '@material-ui/core'

function Header(props) {
    return (
        <div className="container">
            <div>
                <h1>Where in the world?</h1>
                <Button
                    variant="contained"
                >
                    {props.text}
                </Button>
            </div>
        </div>
    )
}

export default Header
