import styled from 'styled-components';

export const Title = styled.h1`
  font-weight: 500;
  color: #394550;
  margin: 16px 0;
`;

export const Buttons = styled.div`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
  background-color: #fcfdff;
  width: 100%;
  justify-content: space-around;
`;

export const Button = styled.button`
  width: 116px;
  font-size: large;
  font-weight: 500;
  color: #394550;
  padding: 8px;
  border: 1px solid #c1d6e9;
  background-color: rgb(235, 242, 249);
  cursor: pointer;
  &:hover {
    background-color: rgb(193, 214, 233);
  }
`;
