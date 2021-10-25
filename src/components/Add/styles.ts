import styled from "styled-components";

export const OuterWrapper = styled.div`
  background-color: #b9e0e8;

  width: 80%;
  margin: 55px auto;
  height: 500px;
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and (max-width: 720px) {
    width: 70%;
    height: auto;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 720px) {
    flex-direction: column;
    height: auto;
  }
`;

export const Partition = styled.div`
  border: 3px green dashed;
  /* border-bottom: none; */
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-around; */
  padding: 50px 0;
  @media screen and (max-width: 720px) {
    padding: 40px 0;
    min-height: 300px;
  }
`;

export const Heading = styled.h3`
  font-size: 2rem;
  color: #924848;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* height:100%; */
  align-items: center;
  flex: 1;
`;

export const TextInput = styled.input`
  /* margin:auto; */
  text-align: center;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0px;
  background-color: #b9e0e8;
  width: calc(100% - 6px - 20px);
  border: 3px green dashed;
  text-align: center;
  padding: 10px;
`;

export const AddButton = styled.button`
  width: 60px;
  padding: 5px;
`;
