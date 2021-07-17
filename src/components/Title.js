import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import React, { useState } from "react";

const Titlediv = styled.div`
width: 100%;
height: 50vw;
line-height: 50vw;
font-size: 7vw;
margin: 0 auto;
background-color: aquamarine;
text-align: center;
vertical-align: middle;
`

const Testdiv = styled(animated.div)`

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
    <Titlediv>

      
      <Testdiv style={props}>
        <animated.div style={props2}>
        ㅁ
        </animated.div>
      <b>포트 폴리오 제목</b> <br />
        

      </Testdiv>
 
    </Titlediv>
    // use spring xys 에서 y - 20 에서 y로 올리기
    // 현재 브라우저 크기에 동적으로 반응 가로 : 화면크기 가로, 세로 100%
    // 가로 세로 가운데 정렬 하기
    // 백그라운드 제외 글씨만 이동하도록
    // 폰트 설정
  );
};

export default Title;
