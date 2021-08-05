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
  min-width: 1400px;
  height: 900px;
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
  width: 1250px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.2fr 600px;

  margin: 0 auto;
`;

const Items = styled.div`
  width: 625px;
  height: 100%;
  margin-top: 20pt;
  align-items: center;
  //border: 2px solid;
  box-sizing: border-box;
  background-color: silver;
  
  
`;

const Item = styled.ul`
  list-style: none;
  display: flex;
  padding: 5px;
  flex-direction: column;
  justify-content: space-around;
  font-size:1.3rem;
  font-weight:bold;
  margin: 0 auto;
`;

const Progress = styled.div`
  width: 500px;
  height: 20px;
  background-color: yellow;
`;
const Inprogress = styled(animated.div)`

  height: 20px;
  background-color: red;
`;

const Img = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 30%;
  overflow: hidden;
`;
const Tech = () => {
  
    /* --------- 변수 선언부 --------- */

  const {per30, per50, per80 } = useSpring({
    per30: 30,
    per50: 50,
    per80: 80,
    from: { per30:0, per50: 0, per80: 0 },
    config: { duration: 700},
  });
  

  {
    /* --------- 리턴 정의부 --------- */
  }
  return (
    <Main id="tech" >
      <List>
        <Title>My Skill</Title>

        <div>
          <Items>
            
            <div
              style={{ display: "flex", height: "80%", flexDirection: "row" }}
            >
              <Item>
              <li>
                  <Img src={logoSpring} />
                </li>
                <li>
                  <Img src={logoReact} />
                </li>

                <li>
                  <Img src={logoJs} />
                </li>

                
              </Item>
              <Item>
              <li>
                  Spring Framework
                  <Progress>
                    <Inprogress style={{width: per50.to(per => `${per}%`)}} />
                  </Progress>
                </li>
                <li>
                  React
                  <Progress>
                    <Inprogress style={{width: per30.to(per => `${per}%`)}}/>
                  </Progress>
                </li>
                <li>
                  Java Script
                  <Progress>
                    <Inprogress  style={{width: per30.to(per => `${per}%`)}}/>
                  </Progress>
                </li>

              </Item>
            </div>
          </Items>
        </div>
        <div>
          <Items>
            
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
                <li>
                  <Img src={logoGithub} />
                </li>
              </Item>
              <Item>
                <li>
                  MySQL
                  <Progress >
                    <Inprogress   style={{width: per30.to(per => `${per}%`)}}/>
                  </Progress>
                </li>
                <li>
                  Oracle
                  <Progress>
                    <Inprogress style={{width:0}}/>
                  </Progress>
                </li>
                <li>
                  GitHub
                  <Progress>
                    <Inprogress   style={{width: per30.to(per => `${per}%`)}}/>
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
