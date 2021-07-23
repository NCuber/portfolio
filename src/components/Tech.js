import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { getByDisplayValue } from "@testing-library/react";
import logoJs from "../img/JavaScript.svg";
import logoReact from "../img/React.svg";
import logoSpring from "../img/Spring.svg";
{
  /* --------- 스타일 선언부 --------- */
}

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: skyblue;
  display: flex;
  align-items: center;
}
`;

const Title = styled.div`
  font-size: 40pt;
  text-decoration: underline;
  font-weight: bold;
  letter-spacing: 3px;
  grid-column: 1/3;
`;

const List = styled.div`
  display: grid;
  width: 1300px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.2fr 300px 300px;
  grid-gap: 20px;
  margin: 0 auto;
  
`;


const Item = styled.div`
  width:100%;
  height:100%;
  grid-template-columns: 0.2fr 0.75fr;
  grid-template-rows: 100px repeat(100px, auto);
  gap: 20px;
  justify-content: center;
  align-items: center;
  border: solid;
  display: grid;

`;

const Progress = styled(animated.div)`
  height:30%;
  background-color: blue;
  
`;

const Img = styled.img`
  width: 100%;
  height:100%;
  overflow: hidden;
`;
const Tech = () => {
  {
    /* --------- 변수 선언부 --------- */
  }



  {
    /* --------- 리턴 정의부 --------- */
  }
  return (
    <Main>
      <List>
        <Title>My Skill</Title>

        <div style={{ gridRow: "2/4" }}>
          <Item>
            <Title style={{fontSize: '30pt', textAlign:'center'}}>코딩</Title>
            <Img src={logoJs}/><Progress></Progress>
            <Img src={logoReact}/><div></div>
            <Img src={logoSpring}/><div></div>
            <Img src={logoJs}/><div></div>
            <Img src={logoJs}/><div></div>
  
          </Item>
        </div>
        <div>
          <Item>
          <Title style={{ gridColumn: "1/4" ,fontSize: '30pt', textAlign:'center'}}>DataBase</Title>

          </Item>
        </div>
        <div>
          <Item>
          <Title style={{ gridColumn: "1/4" ,fontSize: '30pt', textAlign:'center'}}>기타</Title>

          </Item>
        </div>
      </List>
    </Main>
  );
  // 1, 3번 우선, 게이지 모양은 스크롤시 반응하여 게이지로 표시
  /*
        <b>SPRING, REACT, MYSQL</b> <br />
      1. 이름 옆에 게이지 모양이 뜨며 오른쪽에 진행도 표시 <br /> 
      2. 이름 위에 언어 마크가 뜨며 이름 밑에 진행도 표시 <br />
      3. 마크 바깥에 원모양 게이지 표시
      */
};

export default Tech;
