import styled from "styled-components";
import pic from "../img/JavaScript.svg";

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  //background-color: ivory;
  padding: 10pt;
  box-sizing: border-box;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

const Picture = styled.img`
  width: 20vw;
`;

const Introduction = () => {
  return (
    <Main>
      <h1>Introduction</h1>
      <Content>
        <Picture src={pic} />
        <ul style={{listStyle:'none'}}>
          <li>이름: 김재원</li>
          <li>생년월일: 1996.10.31</li>
          <li>주소: 경기도 양주시</li>

          <li>자격증: <ul><li>워드 프로세서</li> <li>컴퓨터 활용능력 1급</li></ul> </li>

          <li>이메일: ac020211@naver.com</li>
          <li>깃허브: https://github.com/NCuber</li>
        </ul>
      </Content>
    </Main>
  );
};

export default Introduction;
