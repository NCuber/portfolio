import Tech from "./components/Tech";
import Introduction from "./components/Introduction";
import ProjectContainer from "./containers/ProjectContainer"
import Contact from "./components/Contact";
import Title from "./components/Title";




function App() {
  return (
    
    <div style={{backgroundColor:'ivory'}}>
      
      
      <Title />
      <hr/>
      <Introduction />
      <hr/>
      <Tech />
      <hr/>
      <ProjectContainer />
      <hr/>

      
      <Contact />
      
    </div>
  );
  // 바로가기 버튼 만들기 . 
  // 버튼 누를시 상단에서 메뉴바 생성.
  // 각 단 마다 바로가기 버튼을 만들어서 이동.
  // 위로가기 버튼 생성.
}

export default App;
