import styled from "styled-components"

export const Card = styled.div`
  width: 16rem;
  height: 19.375rem;
  margin: 0 2rem 2rem 0;
  background: ${props => props.theme["base-card"]};
  border-radius: 6px 36px 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 7.5rem;
    transform: translateY(-20%);
  }

  .labels {
    display: flex;
    gap: 0.25rem;
    padding-bottom: 1rem;
  }

  .label {
    background: ${props => props.theme["yellow-light"]};
    color: ${props => props.theme["yellow-dark"]};
    font-weight: bold;
    padding: 0.5rem;
    border-radius: 8px;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    padding-bottom: 1rem;

    h2 {
      font-family: "Baloo 2", sans-serif;
      font-weight: 700;
      line-height: 130%;
      font-style: normal;
    }

    p {
      color: ${props => props.theme["base-label"]};
      text-align: center;
    }
  }

  .checkout {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;

    .price {
      font-size: 0.875rem;

      .priceNumber {
        font-family: "Baloo 2", sans-serif;
        font-size: 1.5rem;
        color: ${props => props.theme["base-text"]};
      }
    }

    .cart {
      display: flex;
      align-items: center;

      .number {
        display: flex;
        align-items: center;
        border-radius: 8px;
        font-weight: 500;
        font-size: 1.2rem;
        gap: 10px;
        padding: 0.5rem;
        background: ${props => props.theme["base-button"]};

        .sign {
          color: ${props => props.theme["purple"]};
          padding: 0 0.5rem;
        }
      }

      .cartIcon {
        display: flex;
        align-items: center;
        background: ${props => props.theme["purple-dark"]};
        border-radius: 8px;
        padding: 0.5rem;
        margin-left: 0.5rem;
      }
    }
  }
`
