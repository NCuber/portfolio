import Tech from "./components/Tech";
import Introduction from "./components/Introduction";
import ProjectContainer from "./containers/ProjectContainer"
import Contact from "./components/Contact";
import Title from "./components/Title";
import Menu from "./components/Menu";
import styled from "styled-components";
import React, {useState} from "react";
import ReactDOM from 'react-dom'



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



class App extends React.Component
{
  state = {
    scrollTop: 0,
    total: 0
  };

  componentDidMount() {
    // 스크롤 이벤트 적용
    window.addEventListener('scroll', this.onScroll);
    const total = document.documentElement.scrollHeight;
    this.setState({total});
  }


  onScroll = (e) => {
    // 스크롤 할때마다 state에 scroll한 만큼 scrollTop 값 증가하므로 이를 업데이트해줌, 
    //따라서 스크롤 시점에 따라 특정액션을 추후에 state를 활용하여 구현 가능
    const scrollTop = (((('scroll', e.srcElement.scrollingElement.scrollTop) / this.state.total) - 0.07 )/ 0.22).toFixed(1);
    
    this.setState({ scrollTop });
  };

  render(){
  return (
    
    <Main>
      
      <Menu focus={this.state.scrollTop} total={this.state.total}/>
      <Title focus={this.state.scrollTop}/>
      <Introduction focus={this.state.scrollTop}/>
      <Tech focus={this.state.scrollTop}/>
      <ProjectContainer focus={this.state.scrollTop}/>   
      <hr/>
      <Contact focus={this.state.scrollTop}/>
      
    </Main>
  );
};
  // 바로가기 버튼 만들기 . 
  // 버튼 누를시 상단에서 메뉴바 생성.
  // 각 단 마다 바로가기 버튼을 만들어서 이동.
  // 위로가기 버튼 생성.
}

export default App;
