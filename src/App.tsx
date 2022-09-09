import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { Router } from './Router'
import { IssuesContextProvider } from './contexts/IssuesContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      
      <BrowserRouter>
        <IssuesContextProvider>
          <Router />
        </IssuesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
