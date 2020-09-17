import styled from 'styled-components'
import style from 'styled-theming'

const getBackground = style.variants('mode', 'variant', {
    normal: {
        light: 'hsl(0, 0%, 100%)',
        dark: 'hsl(209, 23%, 22%)'
    }
})

const getTextColor = style.variants('mode', 'variant', {
    normal: {
        light: '#111',
        dark: '#EEE'
    }
})

const Button = styled.button`
    background-color: ${getBackground};
    color: ${getTextColor};
`

export default Button