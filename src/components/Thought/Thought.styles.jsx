import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f0f0;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const RemoveButton = styled.button`
  background-color: #e74c3c;
  color: #fff;
  font-size: 20px;
  border: none;
  border-radius: 50%;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #973328;
  }
`;

export const Text = styled.div`
  flex-grow: 1;
  margin: 0 10px;
`;