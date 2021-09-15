import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
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
  max-width: 1600px;
  height: 900px;
  display: flex;
  flex-direction:column;
  
  font-family: 'Noto Sans CJK KR';
  margin: 0 auto;
}
`;


const Title = styled.div`
 
  font-size: 40pt;
  text-align: right;
  font-weight: bold;
  margin: 0 auto;
  width:90%;
  grid-column: 1/3;
  
`;

const List = styled(animated.div)`
  display: grid;
  width: 90%;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 750px;

  margin: 0 auto;
`;

const Items = styled.div`
  width: 100%;
  height: 100%;
  margin-top:3%;
  align-items: center;
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
  box-sizing: border-box;
`;

const Progress = styled.div`
  width: 100%;
  height: 20px;
  background-color: yellow;
`;
const Inprogress = styled(animated.div)`
  height: 20px;
  background-color: red;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 30%;
  overflow: hidden;
`;
const Tech = (prop) => {
  
    /* --------- 변수 선언부 --------- */
  const first = prop.focus > 0.4;
  const second = prop.focus > 0.5;

  const props = useSpring({
    x : first ? 0 : 200,
    opacity: first ? 1 : 0,
    config: config.slow,
  });

  const {per30, per50, per80 } = useSpring({
    per30: second ? 30 : 0,
    per50: second ? 50 : 0,
    per80: second ? 80 : 0,
    from: { per30:0, per50: 0, per80: 0 },
    config: { duration: 700},
  });



  {
    /* --------- 리턴 정의부 --------- */
  }
  return (
    <Main id="tech">
      <Title>MY SKILL</Title>
      <List style={props} >
        

        <div >
          <Items>
            
            <div
              style={{ display: "flex", height: "70%", flexDirection: "row" }}
            >
              <Item style={{width:'15%', marginLeft:'20px', marginRight:'10px'}}>
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
              <Item style={{width:'70%', margin:'0'}}>
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
              style={{ display: "flex", height: "70%", flexDirection: "row" }}
            >
              <Item style={{width:'15%', marginLeft:'20px', marginRight:'10px'}}>
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
              <Item style={{width:'70%', margin:'0'}}>
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

};

export default Tech;
