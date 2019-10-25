import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 110px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    textarea {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 200px;
      padding: 15px 15px;
      color: #fff;
      margin: 0 0 10px;
      resize: none;
      font: 14px 'Roboto', sans-serif;

      &::placeholder {
        color: #fff;
        font: 14px 'Roboto', sans-serif;
      }
    }

    input.regular {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button.save {
      width: 15%;
      display: flex;
      align-self: flex-end;
      justify-content: center;
      align-items: center;
      margin: 5px 0 0;
      height: 44px;
      background: #e5556e;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#E5556E')};
      }
    }

    .datepicker {
      /* width: 60px; */
      /* max-width: 900px;
      width: 100%; */
      div {
        border: 0;
      }

      button {
        /* background: #7159c1; */
        svg {
          &:hover {
            stroke: #e5556e;
            color: #e5556e;
          }
        }
      }

      input {
        background: rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        height: 44px;
        padding: 0 20px;
        color: #fff;
        margin-bottom: 30px;
        /* width: 100px; */
      }

      span {
        color: #fff;
        font-size: 20px;
        padding: 0 5px;
      }

      select {
        color: #fff;

        option {
          color: #000;
        }
      }
    }
  }
`;
