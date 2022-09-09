import styled from "styled-components";

export const TitlePostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;

  padding: 2rem ;
  
  background-color: ${props => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  gap: 2rem;

  margin-top: -10rem;

  .links {
    display: flex;
    justify-content: space-between;
    
    a {
      text-decoration: none;
      color: ${props => props.theme.blue};
      border-bottom: 2px solid transparent;
    }

    a:hover {
      border-bottom: solid 2px ${props => props.theme.blue};
    }
  }
`;

export const Info = styled.div`
  display: flex;
  width: 100%;
  
  span {
    color: ${props => props.theme["base-label"]};
    margin-right: 0.5rem;
  }

  p, time {
    margin-right: 1.5rem;
  }
  
`;