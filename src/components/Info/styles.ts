import styled from "styled-components"

export const InfoContainer = styled.div`
  display: flex;
  padding: 5.75rem 0;
  gap: 2.5rem;
  max-width: 70rem;
  flex-wrap: wrap;
`
export const InfoBox = styled.div`
  /* outline: 1px solid yellow; */
  flex: 2;
  gap: 3rem;
  display: flex;
  flex-direction: column;
`

export const Image = styled.div`
  /* outline: 1px solid green; */
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    max-width: 29.75rem;
    @media (max-width: 768px) {
      max-width: 15rem;
    }
    @media (max-width: 1260px) {
      max-width: 22rem;
    }
  }
`

export const InfoText = styled.div`
  /* outline: 1px green solid; */
  /* padding-right: 1rem; */
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;

    @media (max-width: 1290px) {
      font-weight: 800;
      font-size: 2rem;
      line-height: 120%;
    }
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 140%;

    /* @media (max-width: 1290px) {
      font-size: 1rem;
      font-weight: 400;
      line-height: 120%;
    } */
  }
`

export const IconAndText = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
`

export const InfoIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.7rem;
`

interface IconProps {
  background: string
}

export const Icon = styled.div<IconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${props => {
    if (props.background == "yellow-dark") return props.theme["yellow-dark"]
    if (props.background == "base-text") return props.theme["base-text"]
    if (props.background == "yellow") return props.theme["yellow"]
    if (props.background == "purple") return props.theme["purple"]
  }};
`
