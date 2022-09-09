import styled from "styled-components";

export const ProfileCardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  padding: 2rem ;
  
  background-color: ${props => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  gap: 2rem;

  margin-top: -10rem;

  img {
    width: 9.25rem;
    height: 9.25rem;

    border-radius: 8px;
  }
`;

export const ProfileContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 8px;
`;

export const Name = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: ${props => props.theme.blue}
  }

  svg {
    margin-left: 0.5rem;
  }
`;

export const Bio = styled.div`
`;

export const Info = styled.div`
  display: flex;
  width: 100%;

  span {
    color: ${props => props.theme["base-label"]};
    margin-right: 0.5rem;
  }

  p {
    margin-right: 1.5rem;
  }
`;
