import styled from "styled-components"

export const HomeContainer = styled.div`
  /* outline: 1px solid blue; */
  padding-bottom: 9rem;

  .title {
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    font-size: 2rem;
    padding-bottom: 3.375rem;
  }
`
export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 320px) and (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* @media (max-width: 1260px) {
    max-width: 22rem;
  } */
`
