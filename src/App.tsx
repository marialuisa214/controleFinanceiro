
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Trasaction } from './pages/Transactions'


export function App() {  
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Trasaction />
    </ThemeProvider>
  )
}

export default App
