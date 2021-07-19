import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { getByDisplayValue } from "@testing-library/react";

{
  /* --------- 스타일 선언부 --------- */
}

const Main = styled.div`
  width: 100%;
  height: 50vw;
  background-color: skyblue;

  margin: 0 auto;
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
  width: 1fr;
  height: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.2fr 1fr 1fr;
  grid-gap: 10px 10px;
  margin: 0 auto;
`;

const Circle = styled(animated.div)`
  position: relative;
  display: flex;
  width: 180px;
  height: 180px;
  border-radius: 50%;
`;

const Incircle = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  text-align: center;
  line-height: 150px;
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
  background: skyblue;
`;

const Item = styled.div`
  width:96%;
  height:96%;
  grid-template-columns: repeat(3, 0.9fr);
  grid-template-rows: 0.2fr repeat(auto, 1fr);
  grid-gap: 10px 10px;
  padding: 10px;
  
  border-style: solid;
  display: grid;
`;

const Tech = () => {
  {
    /* --------- 변수 선언부 --------- */
  }

  const { dono } = useSpring({
    dono: 100,
    from: { dono: 0 },
    config: { mass: 1, tension: 150, friction: 70 },
  });

  {
    /* --------- 리턴 정의부 --------- */
  }
  return (
    <Main>
      <List>
        <Title>My Skill</Title>

        <div style={{ gridRow: "2/4" }}>
          <Item>
            <Title style={{ gridColumn: "1/4" ,fontSize: '30pt', textAlign:'center'}}>코딩</Title>
            <Circle
              style={{
                background: dono.to(
                  (dono) => `conic-gradient(blue ${dono}% , white ${dono}%)`
                ),
              }}
            >
              <Incircle></Incircle>
            </Circle>

            <Circle
              style={{
                background: dono.to(
                  (dono) => `conic-gradient(blue ${dono}% , white ${dono}%)`
                ),
              }}
            >
              <Incircle></Incircle>
            </Circle>

            <Circle
              style={{
                background: dono.to(
                  (dono) => `conic-gradient(blue ${dono}% , white ${dono}%)`
                ),
              }}
            >
              <Incircle></Incircle>
            </Circle>

            <Circle
              style={{
                background: dono.to(
                  (dono) => `conic-gradient(blue ${dono}% , white ${dono}%)`
                ),
              }}
            >
              <Incircle></Incircle>
            </Circle>

            <Circle
              style={{
                background: dono.to(
                  (dono) => `conic-gradient(blue ${dono}% , white ${dono}%)`
                ),
              }}
            >
              <Incircle></Incircle>
            </Circle>

            <Circle
              style={{
                background: dono.to(
                  (dono) => `conic-gradient(blue ${dono}% , white ${dono}%)`
                ),
              }}
            >
              <Incircle></Incircle>
            </Circle>
          </Item>
        </div>
        <div>
          <Item>
          <Title style={{ gridColumn: "1/4" ,fontSize: '30pt', textAlign:'center'}}>코딩</Title>
            <Circle
              style={{
                background: dono.to(
                  (dono) => `conic-gradient(blue ${dono}% , white ${dono}%)`
                ),
              }}
            >
              <Incircle></Incircle>
            </Circle>
            <Circle
              style={{
                background: dono.to(
                  (dono) => `conic-gradient(blue ${dono}% , white ${dono}%)`
                ),
              }}
            >
              <Incircle></Incircle>
            </Circle>
          </Item>
        </div>
        <div>
          <Item>
          <Title style={{ gridColumn: "1/4" ,fontSize: '30pt', textAlign:'center'}}>코딩</Title>
            <Circle
              style={{
                background: dono.to(
                  (dono) => `conic-gradient(blue ${dono}% , white ${dono}%)`
                ),
              }}
            >
              <Incircle></Incircle>
            </Circle>
            <Circle
              style={{
                background: dono.to(
                  (dono) => `conic-gradient(blue ${dono}% , white ${dono}%)`
                ),
              }}
            >
              <Incircle></Incircle>
            </Circle>
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
