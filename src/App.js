import Tech from "./components/Tech";
import Introduction from "./components/Introduction";
import ProjectContainer from "./containers/ProjectContainer"
import Contact from "./components/Contact";
import Title from "./components/Title";
import Menu from "./components/Menu";
import styled from "styled-components";
import React from "react";




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
    
  }


  onScroll = (e) => {

    
    const scrollTop = (('scroll', e.srcElement.scrollingElement.scrollTop) / this.state.total).toFixed(2) ;
    const { innerHeight } = window;
    const total = document.documentElement.scrollHeight - innerHeight;
    this.setState({total});
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

}

export default App;
