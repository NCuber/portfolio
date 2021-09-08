import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

const Project = styled.div`
  min-width: 1400px;
  height: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Grid = styled(animated.div)`
  display: grid;
  width: 90%;
  height: 85%;
  grid-template-columns: 0.6fr 0.4fr;
  grid-template-rows: 0.85fr 0.15fr;
  grid-gap: 10px 10px;
  box-sizing: border-box;
  margin: 0 auto;
  justify-content: center;
  font-size: 1.3rem;
  border: 2px solid;
`;

const Imageview = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Info = styled.div`
  margin: 10px auto;
  padding: 20px;
  
`;

const Imagelist = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const Img = styled.img`
  width: 13%;
  height: 75%;
  overflow: hidden;
  cursor:pointer;
  border-radius: 10%;
  border: 2px solid;
`;

const MainProject = ({ focusimg, imgs, onChange, focus }) => {
  const first = focus > 0.7;

  const props = useSpring({
    x : first ? 0 : -200,
    opacity: first ? 1 : 0,
    config: config.slow,
  });

  return (
    <Project id="projects">
      <p style={{fontSize:'40pt', fontWeight:'bold', width:'90%', margin:'5pt auto'}}>PROJECT</p> 
      <Grid style={props} >
        <Imageview>
          <img
            src={focusimg}
            style={{ width: "90%", border: "1px solid" }}
          />
        </Imageview>
        <Info style={{ gridRow: "1/3", gridColumn: "2" }}>
          <p
            style={{
              fontSize: "3rem",
              margin: "10px auto",
              fontWeight: "bolder",
            }}
          >
            보드 게임 프로젝트
            <br />
          </p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <ul style={{ listStyle: "none", padding: "0", fontWeight: "bold" }}>
              <li>개발 기간</li>
              <li>개발 환경</li>
              <li>개발 인원</li>
            </ul>
            <ul style={{ listStyle: "none" }}>
              <li>2020-08-01 ~ 2020-08-28 (총 28일)</li>
              <li>Spring / JavaScript / JSP / MySQL / MyBatis</li>
              <li>5명</li>
            </ul>
          </div>
          <p style={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: '0.5rem' }}>담당</p>
          <li>소켓 생성 및 연동, 소켓을 이용한 실시간 채팅</li>
          <li>게임 방 목록 갱신, 생성, 입장, 게임 대기실 페이지 구현</li>
          <li>DB를 이용한 게임 판매 랭킹과 내 게임 목록 페이지 구현</li>

          <p style={{ fontWeight: "bold", fontSize: "1.5rem", marginTop: '3rem',marginBottom: '0.5rem' }}>프로젝트 설명</p>
          
            코로나 사태에 친구들과 비대면으로 보드게임을 같이 할 수 있도록
            웹사이트 상에 게임을 구축하여 빠르고 편리하게 보드 게임을 할 수 있는
            사이트 입니다.
          
        </Info>
        <Imagelist>
          {imgs.map((image) => (
            <Img src={image.img} onClick={() => onChange(image.img)} />
          ))}
        </Imagelist>
        
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
