import React from 'react'
import {ThemeConsumer} from 'styled-components'
import {Button} from '@material-ui/core'
import Brightness3Icon from '@material-ui/icons/Brightness3';
import {StyledButton} from './Button'

const ToggleButton = () => {    

    return (
        <ThemeConsumer>
            {theme => 
                <Button startIcon={<Brightness3Icon />} onClick={e => {
                theme.setTheme(theme.mode === 'dark' ? {mode: 'light'} : {mode: 'dark'})
            }}>Dark mode</Button>
            }
        </ThemeConsumer>
    )
}

export default ToggleButton