import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const SubmitButton = styled.input`
  background-color: #007BFF;
  color: #fff;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0053ac;
  }
`;