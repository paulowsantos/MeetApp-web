import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 110px auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);
  transition: 0.3s;
  background-color: #ff506f;
  color: #fff;
  border-radius: 10px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.8);
    cursor: pointer;
    background-color: ${darken(0.05, '#FF506F')};
  }

  span {
    font-size: 20px;
    font-weight: bold;
    margin-top: 15px;
  }
`;
