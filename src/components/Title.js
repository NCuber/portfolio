import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";
import React, { useState } from "react";
import bg from "../img/background.jpg";

const Titlediv = styled(animated.div)`
min-width: 1400px;
//width: 100vw;
height: 900px;
display:flex;
font-size: 20vh;
font-weight: bold;
align-items: center;
justify-content: center;
color: white;


`
const Main = styled.div`
//width: 100vw;
min-width: 100%;
min-height: 100%;

background-attachment: fixed;
background-image: url(${bg});
background-size: cover;
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

    x : 0,
    opacity: 1,
    delay:500,
    config: config.stiff,
    from: { x: -200, opacity:0},
    
  });


  
  
  return (
    <Main id="title" >
      <Titlediv style={props}>
        <div style={{position:'relative', left:'10vh', top:'-10vh', fontSize:'7vh'}}>Kim's</div>
        PortFolio
        <div style={{position:'relative', left:'-15vh', top:'12vh', fontSize:'7vh'}} >Website</div>
      </Titlediv>
      
    </Main>
    // use spring xys 에서 y - 20 에서 y로 올리기
    // 현재 브라우저 크기에 동적으로 반응 가로 : 화면크기 가로, 세로 100%
    // 가로 세로 가운데 정렬 하기
    // 백그라운드 제외 글씨만 이동하도록
    // 폰트 설정
  );
};

export default Title;
