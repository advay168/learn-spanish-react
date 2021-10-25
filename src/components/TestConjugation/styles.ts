import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h3`
  font-size: 2rem;
  text-align: center;
  color: #924848;
`;

export const InputLabel = styled.label`
  width: 100%;
  text-align: center;
`;

export const AnswerInput = styled.input`
  width: 40%;
  margin-left: 5px;
  height: 30px;
`;

export const AnswerResponse = styled.div`
  width: 100%;
  text-align: center;
  margin: 30px 0 0;
  font-size: 30px;
`;

export const Button = styled.button`
  width: 60%;
  max-width: 500px;
  height: 40px;
  margin: 50px auto;
  border-radius: 10px;
`;
