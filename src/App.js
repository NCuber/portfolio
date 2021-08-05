import Tech from "./components/Tech";
import Introduction from "./components/Introduction";
import ProjectContainer from "./containers/ProjectContainer"
import Contact from "./components/Contact";
import Title from "./components/Title";
import Menu from "./components/Menu";
import styled from "styled-components";
import {useState} from "react";



const Main = styled.div`
  min-width: 1500px;
  background-color:ivory;
  font-family:'Noto Sans CJK KR';
`;

const Menubtn = styled.div`
  position:fixed;
  left: 5%;
  top: 2.5%;
  line-height: 0vw;
  font-size: 2rem;
  font-weight:bold;
  color:black;
`;






function App() {

  
  return (
    
    <Main>
      <Menu />
      
      
      <Title/>
      <Introduction/>
      <Tech/>
      <ProjectContainer/>   
      <hr/>
      <Contact/>
      
    </Main>
  );
  // 바로가기 버튼 만들기 . 
  // 버튼 누를시 상단에서 메뉴바 생성.
  // 각 단 마다 바로가기 버튼을 만들어서 이동.
  // 위로가기 버튼 생성.
}

export default App;
