import styled from "styled-components"

export const CartContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  padding-bottom: 9rem;
  /* outline: 1px solid red; */

  .headTitle {
    font-family: "Baloo 2";
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.4rem;
    padding-bottom: 0.9rem;
  }
`

export const AddressAndPaymentSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`

export const ConfirmOrderSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`

export const AddressAndPayment = styled.div`
  display: flex;
  flex-direction: column;
`
