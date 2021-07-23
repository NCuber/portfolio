import styled from "styled-components";


const Project = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: green;
  display:flex;
  
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  width: 1350px;
  height: 670px;
  grid-template-columns: 800px 500px;
  grid-template-rows:  550px 100px;
  grid-gap: 20px 20px;
  background-color: skyblue;
  margin: 0 auto;
  justify-content: center;
  
`;

const Imageview = styled.div`

  
  display: flex;
  align-items: center;
  //background-color: red; 
 
  
`;
const Info = styled.div`

  background-color: yellow;
  margin: 10px auto;  
  padding: 20px;
  border-left: solid;
`;

const Imagelist = styled.div`
  display:flex;
  justify-content: center;
  //background-color: blue;
  gap: 15px;
  
`;

const Img = styled.img`
  width: 15%;
  height:75%;
  overflow: hidden;
  border-radius: 10%;
  border: 2px solid;
`;

const MainProject = ({ focusimg, imgs, onChange }) => {
  return (
    <Project>
      <Grid>
        <Imageview>
          <img src={focusimg} style={{width:'100%', height:'auto', border:'1px solid'}}/>
        </Imageview>
        <Info style={{gridRow:'1/3', gridColumn:'2'}}>
          <h1 style={{textAlign:'center'}}>보드 게임 프로젝트<br/></h1>
          개발 기간 : 2020-08-01 ~ 2020-08-28 (총 28일) <br/><br/>
          개발 환경 : Spring, JavaScript, JSP, MySQL, MyBatis<br/><br/>
          개발 인원 : 5명<br/><br/>
          담당 <br/> 소켓 구축 및 연동, 소켓을 이용한 실시간 채팅, <br/> 게임 방 관리, 게임 대기실, <br/> DB를 이용한 게임 판매 랭킹과 내 게임 목록 페이지 구현 <br/><br/>
          프로젝트 설명 <br/> 코로나 사태에 친구들과 비대면으로 보드게임을 같이 할 수 있도록 웹사이트 상에 게임을 구축하여 빠르고 편리하게 보드 게임을 할 수 있는 사이트 입니다.<br/>

        </Info>
        <Imagelist>
        {imgs.map((image) => (
            <Img src={image.img} onClick={() => onChange(image.img)}
            />
          ))}
        </Imagelist>
        <br />
      </Grid>
    </Project>

    /*
    <div>
      <b>메인 프로젝트 메인 프로젝트를 설명하는 칸 ex) 보드 게임 프로젝트 비트</b> <br/>
      교육센터 기간중 팀프로젝트로 제작 제작 기간 0000.00.00 ~ 0000.00.00 담당 <br/>
      제작 : 보드 게임의 대기실(게임 방목록 및 제작, 유저 목록 및 채팅) 제작 <br/>
      게임 랭킹 및 목록 <br/>
    </div>
    */
  );
  // 자연스런 페이드인
  // 좌측 상단 그림은 밑에 스크린샷 목록에서 클릭시 표시, 디폴트는 목록 1번째 사진
  // 좌측 상단 그림을 클릭시 모달창으로 확대
  // 하단 그림을 클릭하면 좌측상단 그림을 그것으로 교체
};

export default MainProject;
