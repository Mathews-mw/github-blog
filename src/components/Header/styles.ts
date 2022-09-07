import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;

  height: 18.5rem;

  background: linear-gradient(135deg, ${props => props.theme["base-profile"]} 80%, ${props => props.theme["base-profile"]});

  img {
    width: 148px;
    height: 98px;

    margin-top: 4rem;
  }
`