import styled from "styled-components";

export const CardPostContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 26rem;
  max-height: 16.25rem;

  padding: 2rem;
  border-radius: 10px;
  border: solid 2px transparent;

  background-color: ${props => props.theme["base-post"]};

  overflow-y: auto;
  overflow-x: hidden;

  &:hover {
    border: solid 2px ${props => props.theme["base-label"]};
  }

  ::-webkit-scrollbar {
    width: 4px;
    opacity: 0.5;
    margin-right: 15px;
  }

  ::-webkit-scrollbar-track {
    background: none;
  }

  ::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 12px;
  }
  
  .headContent {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1rem;

    h2 {
      font-size: 1.25rem;
    }

    time {
      width: 80px;
      font-size: 0.875rem;
      color: ${props => props.theme["base-span"]}
    }
  }

`;