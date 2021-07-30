import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import logoJs from "../img/JavaScript.svg";
import logoReact from "../img/react.png";
import logoSpring from "../img/spring.png";
import logoOracle from "../img/oracle.png";
import logoMysql from "../img/mysql.png";
import logoGithub from "../img/github.png";

{
  /* --------- 스타일 선언부 --------- */
}

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  //background-color: skyblue;
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

const Items = styled.div`
  width: 650px;
  height: 100%;

  gap: 10px;
  padding: 10pt;
  align-items: center;
  border: 2px solid;
  box-sizing: border-box;
`;

const Item = styled.ul`
  list-style: none;
  display: flex;
  padding: 5px;
  flex-direction: column;
  justify-content: space-between;
`;

const Progress = styled.div`
  width: 500px;
  height: 20px;
  background-color: yellow;
`;
const Inprogress = styled(animated.div)`
  width: 50%;
  height: 20px;
  background-color: blue;
`;

const Img = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 30%;
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
          <Items>
            <Title style={{ fontSize: "30pt", textAlign: "center" }}>
              코딩
            </Title>
            <div
              style={{ display: "flex", height: "80%", flexDirection: "row" }}
            >
              <Item>
                <li>
                  <Img src={logoReact} />
                </li>
                <li>
                  <Img src={logoSpring} />
                </li>
                <li>
                  <Img src={logoJs} />
                </li>
                <li />
              </Item>
              <Item>
                <li>
                  React
                  <Progress>
                    <Inprogress />
                  </Progress>
                </li>
                <li>
                  Spring Framework
                  <Progress>
                    <Inprogress />
                  </Progress>
                </li>
                <li>
                  Java Script
                  <Progress>
                    <Inprogress />
                  </Progress>
                </li>
                <li />
              </Item>
            </div>
          </Items>
        </div>
        <div>
          <Items>
            <Title
              style={{
                gridColumn: "1/4",
                fontSize: "30pt",
                textAlign: "center",
              }}
            >
              DataBase
            </Title>
            <div
              style={{ display: "flex", height: "80%", flexDirection: "row" }}
            >
              <Item>
                <li>
                  <Img src={logoMysql} />
                </li>
                <li>
                  <Img src={logoOracle} />
                </li>
              </Item>
              <Item>
                <li>
                  MySQL
                  <Progress />
                </li>
                <li>
                  Oracle
                  <Progress>
                    <Inprogress />
                  </Progress>
                </li>
              </Item>
            </div>
          </Items>
        </div>
        <div>
          <Items>
            <Title
              style={{
                gridColumn: "1/4",
                fontSize: "30pt",
                textAlign: "center",
              }}
            >
              기타
            </Title>
            <div
              style={{ display: "flex", height: "80%", flexDirection: "row" }}
            >
              <Item>
                <li>
                  <Img src={logoGithub} />
                </li>
              </Item>
              <Item>
                <li>
                  GitHub
                  <Progress>
                    <Inprogress />
                  </Progress>
                </li>
              </Item>
            </div>
          </Items>
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
