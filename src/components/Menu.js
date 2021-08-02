import styled from "styled-components";
import {useState} from "react";

const Main = styled.nav`
width: 100vw;
height: 5vh;
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
  right: 2%;
  height:5vh;
  font-size: 1.5rem;
  align-items: center;
  font-weight:bold;
  color:darkblue;
  display:flex;
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
`;


const Menu = () =>
{
    const [mclick, setMclick] = useState(true);


    return (

        <div>
        
        <Main style={{ display: mclick ? 'flex' : 'none'}}>
            <span><A href="#title">Title</A></span>
            <span><A href="#about">About Me</A></span>
            <span><A href="#tech">Tech</A></span>
            <span><A href="#projects">Projects</A></span>
            <span><A href="#contact">Contact</A></span>
            <span />
        </Main>
        <Menubtn onClick={() => setMclick(!mclick)}>{mclick ? 'Close' : 'Menu'}</Menubtn>
        </div>
    );
}

export default Menu;