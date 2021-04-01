import styled from "styled-components";
import img1 from "../img/project1-1.png";
import img2 from "../img/project1-2.png";
import img3 from "../img/project1-3.png";
import img4 from "../img/project1-4.png";
import img5 from "../img/project1-5.png";

const Project = styled.div`
  width: 100%;
  height: 50vw;
  background-color: green;
  position: relative;
  margin:0 auto;
`;
const Imageview = styled.div`
  position: absolute;
  left: 5%;
  top: 5%;
  width: 55%;
  background-color: red;
  float: left;
  height: 65%;
  display: flex;
  justify-content: center;
  overflow:hidden;
`;
const Info = styled.div`
  position: absolute;
  left: 60%;
  top: 5%;
  width: 35%;
  background-color: yellow;
  float: left;
  height: 65%;
  display: flex;
  justify-content: center;
  text-align: center;

`;

const Imagelist = styled.div`
  position: absolute;
  left: 5%;
  top: 70%;
  width: 90%;

  background-color: blue;
  float: left;
  height: 20%;
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  width:20%;
  
  overflow:hidden;
`;

const MainProject = () => {
  const select = img2;
  return (
    <Project>
      <Imageview>
        <img src={select} />
      </Imageview>
      <Info>

          메인 프로젝트 메인 프로젝트를 설명하는 칸 ex) 보드 게임 프로젝트 비트        <br />
        교육센터 기간중 팀프로젝트로 제작 제작 기간 0000.00.00 ~ 0000.00.00 담당        <br />
        제작 : 보드 게임의 대기실(게임 방목록 및 제작, 유저 목록 및 채팅) 제작        <br />
        게임 랭킹 및 목록 <br />
      </Info>
      <Imagelist>
        <Img src={img1} />
        <Img src={img2} />
        <Img src={img3} />
        <Img src={img4} />
        <Img src={img5} />
      </Imagelist>
      <br />
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
