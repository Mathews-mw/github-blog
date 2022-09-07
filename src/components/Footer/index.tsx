import logo from '../../assets/Logo.svg'
import { FooterContainer } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <img src={logo} alt="" />
      <span>by Mathews A.</span>
    </FooterContainer>
  )
}