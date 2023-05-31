import styled from 'styled-components';

export const Title = styled.h2`
  font-weight: 500;
  color: #394550;
  margin: 16px 0;
`;

export const StatList = styled.ul`
  background-color: #ebf2f9;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const StatItem = styled.li`
  border: 1px solid #c1d6e9;
  display: flex;
  padding: 8px;
  color: #394550;
  font-size: large;
  font-weight: 500;
`;

export const Accent = styled.span`
  font-weight: 500;
  margin-left: 8px;
`;
