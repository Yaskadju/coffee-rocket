import styled from "styled-components"

export const PaymentContainer = styled.div`
  background: ${props => props.theme["base-card"]};
  padding: 2.5rem;
  margin-bottom: 0.75rem;
  border-radius: 8px;
`

export const Header = styled.div`
  display: flex;
  gap: 0.5rem;
`
export const HeaderTitle = styled.div`
  margin-bottom: 1rem;

  .subtitle {
    font-size: 0.875rem;
    line-height: 2rem;
  }
`

export const PaymentButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1rem;
`

export const PaymentButton = styled.button`
  flex: 1;
  font-size: 0.7rem;
  padding: 1rem 0.75rem;
  border-radius: 6px;
  border: none;
  background: ${props => props.theme["base-button"]};

  display: flex;
  justify-content: center;
  gap: 0.5rem;

  &:focus {
    outline: 1px solid ${props => props.theme["purple"]};
    background: ${props => props.theme["purple-light"]};
  }
`
