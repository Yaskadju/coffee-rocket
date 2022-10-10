import styled from "styled-components"

export const ConfirmationContainer = styled.div`
  background: ${props => props.theme["base-card"]};
  padding: 2.5rem;
  border-radius: 6px 44px;
`
export const CoffeeItem = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  font-size: 0.9rem;
  flex-wrap: nowrap;

  padding-bottom: 2rem;
  border-bottom: 1px solid ${props => props.theme["base-button"]};

  img {
    width: 4rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .buttons {
      display: flex;
      gap: 0.5rem;
    }
  }

  .number {
    display: flex;
    align-items: center;
    border-radius: 8px;
    font-weight: 500;
    font-size: 1rem;
    gap: 10px;
    padding: 0.5rem;
    background: ${props => props.theme["base-button"]};
  }

  .remove {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 0.7rem;
    border-radius: 8px;
    line-height: 160%;
    gap: 0.3rem;
    padding: 0.5rem;
    cursor: pointer;
    background: ${props => props.theme["base-button"]};
  }

  .price {
    display: inline-block;
    font-weight: bold;
    white-space: nowrap;
  }
`
export const FinishOrder = styled.div`
  padding-top: 2rem;

  .boxPrice {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
  }
  .total {
    font-weight: bold;
  }
`
export const ConfirmOrderButton = styled.button`
  width: 100%;
  margin-top: 1rem;
  border-radius: 8px;
  border: none;
  padding: 0.75rem 0.5rem;
  color: white;
  background: ${props => props.theme["yellow-dark"]};
  cursor: pointer;
`
