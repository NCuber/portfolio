import styled from "styled-components";


const Main = styled.div`
width: 100vw;
height: 7vh;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
box-sizing: border-box;
font-size: 2rem;
font-weight:bolder;

`;


const Menu = () =>
{
    return (
        <Main>
            <span>Title</span>
            <span>About Me</span>
            <span>Tech</span>
            <span>Projects</span>
            <span>Contact</span>
        </Main>
    );
}

export default Menu;