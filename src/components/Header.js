import React from 'react'
import './Header.css'
import ToggleButton from './ToggleButton';

function Header({toggleTheme}) {
    return (
        <div className="container">
            <div>
                <h1>Where in the world?</h1>
                <ToggleButton />
            </div>
        </div>
    )
}

export default Header
