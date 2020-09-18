import React from 'react'
import './Header.css'
import ToggleButton from './ToggleButton';
import {Card, StyledButton} from '../components/Button'

function Header({toggleTheme}) {
    return (
        <Card variant="normal">
            <div className="container">
                <div>
                    <h1>Where in the world?</h1>
                    <ToggleButton />
                </div>
            </div>
            </Card>
    )
}

export default Header
