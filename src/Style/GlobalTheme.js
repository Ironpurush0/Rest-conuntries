import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
body{
  background-color: ${props => props.theme.mode === 'dark' ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)'};
  color: ${props => props.theme.mode === 'dark' ? ' hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'};
}
`

export default GlobalStyle