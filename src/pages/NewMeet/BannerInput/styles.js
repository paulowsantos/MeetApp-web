import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  width: 900px;
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    span {
      color: rgba(255, 255, 255, 0.6);
      font-weight: normal;
    }

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 250px;
      width: 900px;
      border-radius: 4px;
    }

    input {
      display: none;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 250px;
  width: 900px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.4);
  color: rgba(255, 255, 255, 0.6);

  span {
    color: rgba(255, 255, 255, 0.6);
    font-weight: normal;
  }
`;
