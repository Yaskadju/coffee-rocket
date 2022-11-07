import styled from "styled-components"

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  align-items: center;
  align-content: center;
  /* outline: 1px solid red; */

  flex-wrap: wrap;
  gap: 1rem;

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    position: relative;

    a {
      background: ${props => props.theme["yellow-light"]};
      border-radius: 8px;
      border: none;
      padding: 0.5rem;
      text-decoration: none;
    }

    .cartNumber {
      background: ${props => props.theme["yellow-dark"]};
      color: white;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      padding: 0.2rem 0.4rem;
      position: absolute;
      top: 0;
      font-size: 0.8rem;
      right: 0;
      transform: translate(50%, -50%);
    }
  }
`

export const Location = styled.button`
  display: flex;
  background: ${props => props.theme["purple-light"]};
  color: ${props => props.theme["purple-dark"]};
  border: none;
  padding: 0.5rem;
  border-radius: 8px;
  gap: 0.2rem;
`
