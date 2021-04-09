import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  width: 600px;
  font-size: 16px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 590px;
  padding: 0 10px;
`;

export const Input = styled.input`
  width: 87%;
  border: 1px solid #000000;
  margin: 5px;
  padding: 5px;
`;

export const Checkbox = styled.input`
  width: 3%;
  border: 1px solid #000000;
  margin: 5px;
  padding: 5px;
`;

export const Span = styled.span`
  width: 13%;
  text-align: right;
  font-size: 16px;
`;

export const SpanCheckbox = styled.span`
  text-align: left;
  font-size: 16px;
`;

export const Button = styled.button`
  margin: 5px;
`;

export const Red = styled.span`
  color: red;
`;
