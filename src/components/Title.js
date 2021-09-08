import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";
import React, { useState } from "react";
import bg from "../img/background.jpg";

const Titlediv = styled(animated.div)`
min-width: 1400px;
height: 900px;
display:flex;
font-size: 20vh;
font-weight: bold;
align-items: center;
justify-content: center;
color: white;


`
const Main = styled.div`
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
  );
};

export default Title;
