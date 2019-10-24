import styled from 'styled-components';

export const Container = styled.div`
  background: #191621;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 85px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      height: 36px;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
      font-size: 18px;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 16px;
      color: #fff;
      opacity: 0.6;

      &:hover {
        opacity: 1;
      }
    }
  }

  img {
    margin: 0 10px;
    height: 48px;
    width: 48px;
    border: 2px solid #fff;
    border-radius: 50%;
  }

  button {
    margin-left: 10px;
    padding: 12px 15px;
    background: #d44059;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    border: 0;
    border-radius: 4px;
  }
`;
