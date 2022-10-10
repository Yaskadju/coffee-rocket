import styled from "styled-components"

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  align-items: center;
  align-content: center;

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    a {
      background: ${props => props.theme["yellow-light"]};
      border-radius: 8px;
      border: none;
      padding: 0.5rem;
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
