import styled from "styled-components";
import {useState} from "react";

const Main = styled.nav`
width: 100%;
min-width: 1400px;

height: 5vh;
//width:10vw;
//height:100vh; ( max width 1400)
//flex-direction: column;
position:fixed;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
box-sizing: border-box;
font-size: 1.5rem;
font-weight:bolder;
top:0%;
background-color: rgba(200, 200, 200, 0.7);


`;
const Menubtn = styled.div`
  position:fixed;
  left: 30px;
  height:5vh;
  font-size: 1.5rem;
  align-items: center;
  font-weight:bold;
  color:darkblue;
  display:flex;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;

  &:hover{
    font-size: 2rem;

}
`;

const A = styled.a`
text-decoration: none;
&:visited{
    color: black;
}
&:hover{
    font-size: 2rem;
}
&:link{
    color:black;
}
`;


const Menu = (prop) =>
{
    const [mclick, setMclick] = useState(true);


    return (

        <div>
        
        <Main style={{ display: mclick ? 'flex' : 'none'}}>
            <span/>
            <span><A href="#title">Title</A></span>
            <span><A href="#about">About Me</A></span>
            <span><A href="#tech">Tech</A></span>
            <span><A href="#projects">Projects</A></span>
            <span><A href="#contact">Contact</A></span>
            
            
        </Main>
        <Menubtn onClick={() => setMclick(!mclick)}>{mclick ? 'CLOSE' : 'MENU'}</Menubtn>
        </div>
    );
}

export default Menu;