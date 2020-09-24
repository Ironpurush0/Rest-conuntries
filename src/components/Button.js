import styled from 'styled-components'
import style from 'styled-theming'
import {Button} from '@material-ui/core'

const getBackground = style.variants('mode', 'variant', {
    normal: {
        light: 'hsl(0, 0%, 100%)',
        dark: 'hsl(209, 23%, 22%)'
    }
})

const getTextColor = style.variants('mode', 'variant', {
    normal: {
        light: 'hsl(200, 15%, 8%)',
        dark: 'hsl(0, 0%, 100%)'
    }
})

const getElementBackGround = style.variants('mode', 'variant', {
    normal: {
        light: 'hsl(0, 0%, 100%)',
        dark: 'hsl(209, 23%, 22%)'
    }
})

export const StyledButton = styled(Button)`
    background-color: ${getBackground};
    color: ${getTextColor};
`

export const Card = styled.div`
    background-color: ${getElementBackGround};
    color: ${getTextColor};
`