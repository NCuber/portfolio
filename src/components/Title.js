import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import React, { useState } from "react";

const Titlediv = styled.div`
<<<<<<< HEAD
width: 100vw;
height: 100vh;
display:flex;
font-size: 20vh;
font-weight: bold;
align-items: center;
justify-content: center;



=======
width: 100%;
height: 50vw;
line-height: 50vw;
font-size: 7vw;
margin: 0 auto;
//background-color: aquamarine;
text-align: center;
vertical-align: middle;
>>>>>>> 42cfdd4051654e32cd7bc360dfd5280f70f14b92
`
const Main = styled.div`
width: 100vw;
height: 100vh;
background-color: aquamarine;

`;

const Menu = styled.div`
  position: absolute;
  left: 1%;
  top: 3%;
  line-height:0vw;
  font-size: 3vh;
  font-weight:bold;
`;

const Bottom = styled.div`
  position: absolute;
  right: 1%;
  bottom: 3%;
  line-height:0vw;
  font-size: 3vh;
  font-weight:bold;
`;

const Title = () => {

  const [ready, setReady] = useState(false);
  const props = useSpring({

    delay:500,
    config: { mass: 2, tension: 150, friction: 20 },
    from: { opacity: 0, y: 50 },
    to: {opacity: 0.7, y: 0},
  });

  const props2 = useSpring({
    display: 'hidden',
    opacity: 0.7,
    x: 0,
    y: 0,
    rotateZ: 0,
    config: { mass: 2, tension: 150, friction: 20 },
    from: { x: 500, rotateZ:720, opacity: 0, y: 50 },
    onRest: () => setReady(true)
  });

  
  
  return (
    <Main>
      <Menu>Menu</Menu>
      
      <Titlediv>
        <div style={{position:'relative', left:'10vh', top:'-10vh', fontSize:'7vh'}}>Kim's</div>
        PortFolio
        <div style={{position:'relative', left:'-15vh', top:'12vh', fontSize:'7vh'}} >Website</div>
      </Titlediv>
      
      <Bottom> Contact </Bottom>
    </Main>
    // use spring xys 에서 y - 20 에서 y로 올리기
    // 현재 브라우저 크기에 동적으로 반응 가로 : 화면크기 가로, 세로 100%
    // 가로 세로 가운데 정렬 하기
    // 백그라운드 제외 글씨만 이동하도록
    // 폰트 설정
  );
};

export default Title;
