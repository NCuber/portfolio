import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { getByDisplayValue } from "@testing-library/react";
import logoJs from "../img/JavaScript.svg";
import logoReact from "../img/React.svg";
import logoSpring from "../img/Spring.svg";
import logoOracle from "../img/Oracle.svg";
import logoMysql from "../img/MySQL.svg";

{
  /* --------- 스타일 선언부 --------- */
}

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  align-items: center;
  font-family: 'Noto Sans CJK KR';
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
  width:650px;
  height:100%;
  
  gap: 10px;
  
  align-items: center;
  border: solid;
  display:flex;
  flex-direction:column;
`;

const Progress = styled.div`
  width:600px;
  height:20px;
  background-color: white;
  
`;
const Inprogress = styled(animated.div)`
  width:50%;
  height:20px;
  background-color: yellow;
  
`;





const Img = styled.img`
  width: 100px;
  height:80px;
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
            <div><Img src={logoJs}/>Javascript<Progress/></div>
            <div><Img src={logoReact}/>React<Progress><Inprogress></Inprogress></Progress></div>
            <div><Img src={logoSpring}/>Spring Framwork<Progress>d</Progress></div>

  
          </Item>
        </div>
        <div>
          <Item>
          <Title style={{ gridColumn: "1/4" ,fontSize: '30pt', textAlign:'center'}}>DataBase</Title>
            <div><Img src={logoMysql}/>MySQL<Progress/></div>
              <div><Img src={logoOracle}/><Progress><Inprogress></Inprogress></Progress></div>
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
