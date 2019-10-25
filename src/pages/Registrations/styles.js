import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  ul {
    margin-top: 10px;
  }
`;

export const Meet = styled.li`
  flex-direction: column;
  margin: 10px 0;
  border-radius: 4px;
  background: #fff;
  overflow: hidden;
  opacity: ${props => (props.past ? 0.6 : 1)};
`;

export const Banner = styled.img`
  align-self: center;
  /* max-width: 100%; */
  height: 300px;
`;

export const Infos = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
`;

export const Title = styled.span`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const InfoInfo = styled.div`
  flex-direction: row;
  align-items: center;
  padding: 10px 10px;
`;

export const InfoText = styled.span`
  font-size: 14px;
  margin-left: 5px;
  color: #999;
`;

export const CancelRegButton = styled.button`
  /* display: flex; */
  width: 97%;
  background: #f64c75;
  border: 0;
  margin: 10px;
  /* margin-top: 0; */
  height: 46px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.span`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
