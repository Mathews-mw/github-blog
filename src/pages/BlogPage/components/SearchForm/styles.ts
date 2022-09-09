import styled from "styled-components";

export const SearchFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 4rem;

  .headContent {
    display: flex;
    flex-direction: row;

    justify-content: space-between;
  }
  
  form {
    display: flex;
    width: 100%;
    gap: 1rem;
  }

  input {
    flex: 1;
    padding: 1rem;
    border-radius: 6px;
    border: solid 1px ${props => props.theme["base-border"]};
    background: ${props => props.theme["base-input"]};
    color: ${props => props.theme["base-label"]};
  }

  input:focus {
    color: ${props => props.theme["base-text"]}
  }

  button {
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 0.75rem;

    border-radius: 6px;
    background: transparent;
    border: solid 1px ${props => props.theme.blue};
    color: ${props => props.theme.blue};

    &:hover {
      background-color: ${props => props.theme.blue};
      color: ${props => props.theme.white};
      transition: all 0.2s;
    }
  }
`;