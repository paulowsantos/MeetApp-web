import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.span`
  font-size: 28px;
  color: #fff;
  /* align-self: flex-start; */
`;

export const NewButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f64c75;
  color: #fff;
  border: 0;
  padding: 10px 30px;
  height: 46px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;

  span {
    margin-left: 10px;
  }
`;

export const MeetList = styled.ul`
  flex: 1;
  margin-top: 20px;
`;

export const Meet = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  height: 60px;
  padding: 10px 30px;
  margin-bottom: 10px;

  &:hover {
    cursor: pointer;
  }

  span {
    font-size: 20px;
    color: #fff;
  }

  div {
    display: flex;
    align-items: center;

    span {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.6);
      margin-right: 20px;
    }
  }
`;
