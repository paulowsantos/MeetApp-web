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

  div {
    display: flex;
    flex-direction: row;
  }
`;

export const Title = styled.span`
  font-size: 28px;
  color: #fff;
  /* align-self: flex-start; */
`;

export const EditButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #4dbaf9;
  color: #fff;
  border: 0;
  padding: 10px 30px;
  height: 46px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin-right: 20px;

  span {
    margin-left: 10px;
  }
`;

export const CancelButton = styled.button`
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
export const Banner = styled.img`
  border-radius: 4px;
`;
export const Infos = styled.div`
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 40px 10px;
    color: rgba(255, 255, 255, 0.6);

    span {
      margin-right: 30px;
      margin-left: 10px;
    }
  }
`;
export const DescText = styled.div`
  white-space: pre-wrap;
  background: none;
  border: 0;
  color: #fff;
  font: 18px 'Roboto', sans-serif;
`;
