import { ThemeProvider } from "styled-components"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { BlogPage } from "./pages/BlogPage"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      
      <Header />

      <BlogPage />

      <Footer/>
      
    </ThemeProvider>
  )
}

export default App
