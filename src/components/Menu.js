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
  right: 3%;
  top: 0%;
 
  font-size: 2rem;
  font-weight:bold;
  color:darkblue;
 
`;


const Menu = () =>
{
    const [mclick, setMclick] = useState(true);


    return (

        <div>
        
        <Main style={{ display: mclick ? 'flex' : 'none'}}>
            <span><a href="#title">Title</a></span>
            <span><a href="#about">About Me</a></span>
            <span><a href="#tech">Tech</a></span>
            <span><a href="#projects">Projects</a></span>
            <span><a href="#contact">Contact</a></span>
            <span />
        </Main>
        <Menubtn onClick={() => setMclick(!mclick)}>{mclick ? ' Close ' : ' Menu '}</Menubtn>
        </div>
    );
}

export default Menu;