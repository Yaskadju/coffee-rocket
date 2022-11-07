import styled from "styled-components"

export const AddressContainer = styled.div`
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

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .inputAddress {
    padding: 0.75rem;
    border-radius: 4px;
    border: 1px solid ${props => props.theme["base-button"]};
    background: ${props => props.theme["base-input"]};

    &:focus {
      outline: none;
    }
  }

  .error {
    display: inline-block;
    color: red;
  }
`
export const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
  max-width: 100%;

  .number {
    flex: 1;
  }

  .complement {
    flex: 2;
  }

  .city {
    flex: 1;
  }

  .state {
    width: 4rem;
  }
`
