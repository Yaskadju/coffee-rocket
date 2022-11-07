import styled from "styled-components"

export const CartContainer = styled.form`
  display: flex;
  gap: 2rem;

  padding-bottom: 9rem;
  /* outline: 1px solid red; */

  .headTitle {
    font-family: "Baloo 2";
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.4rem;
    padding-bottom: 0.9rem;
  }

  @media (max-width: 1023px) {
    flex-wrap: wrap;
  }
`

export const AddressAndPaymentSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  /* width: 20%; */

  @media (max-width: 1023px) {
    align-items: center;
  }
`

export const ConfirmOrderSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;

  @media (max-width: 1023px) {
    align-items: center;
  }
`

export const AddressAndPayment = styled.div`
  display: flex;
  flex-direction: column;
`
