import styled from "styled-components"

export const PageContainer = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1120px;

  margin: 4rem auto 0;
  padding: 0 8rem;
`;

export const MainContent = styled.main`
  
  .PostsCards {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
  }
`;