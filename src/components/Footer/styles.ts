import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  height: auto;
  padding: 1rem; 
  margin-top: 2rem;

  background: linear-gradient(135deg, ${props => props.theme["base-profile"]} 80%, ${props => props.theme["base-profile"]});

  img {
    width: 64px;
    height: 64px;
    opacity: 0.5;
  }

  span {
    color: ${props => props.theme["base-span"]}
  }
`;