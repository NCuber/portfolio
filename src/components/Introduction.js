import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import pic from "../img/JavaScript.svg";

const Main = styled.div`
  min-width: 1400px;
  height:900px;
  //background-color: ivory;

  box-sizing: border-box;
  font-size: 1.3rem;
`;

const Main2 = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
`;

const Content = styled(animated.div)`
  display: flex;
  flex-direction: row;
  font-size: 1.5rem;

  height:35%;
`;

const Picture = styled.img`
  width: 20%;
  height: 100%;
  
`;



const Introduction = (prop) => {

  const first = prop.focus > 0.1;
  const second = prop.focus > 0.2;

  const props = useSpring({
    x : first ? 0 : 200,
    opacity: first ? 1 : 0,
    config: config.slow,
  });

  const props2 = useSpring({
    x : second ? 0 : -200,
    opacity: second ? 1 : 0,

    config: config.slow,
  });

  return (
    <Main id="about">
      <Main2>
        <h1>ABOUT ME</h1>
        <Content style={props}>
          <Picture src={pic} />
          <ul style={{ listStyle: "none", margin: '0 auto', lineHeight:'3rem'}}>
            <li><b>이름</b> </li>
            <li><b>생년월일</b></li>
            <li><b>주소</b></li>
            <li><b>학력</b></li>
          </ul>
          <ul style={{ listStyle: "none", margin: '0 auto', lineHeight:'3rem'}}>
          <li>김재원</li>
            <li>1996.10.31</li>
            <li>경기도 양주시</li>
            <li>서경대학교 컴퓨터과학과 졸업</li>
          </ul>
          <ul style={{ listStyle: "none", margin: '0 auto', lineHeight:'3rem'}}>
            <li><b>자격증</b></li>
            <ul>
              <li>2019. 07 : 워드프로세서</li>
              <li>2019. 02 : 컴퓨터 활용능력 1급</li>
            </ul>
          </ul>
        </Content>
        <animated.div style={{minWidth:'1400px', lineHeight:'3rem', ...props2}}>
          <p style={{fontSize:'2.5rem', fontWeight:'bolder'}}>“당연히 사람이 해야 하는 거 아냐?”</p>
          저는 군 복무를 하면서 왜 보초 근무를 사람이 편성해야 하는 것인지 의문이 들었었습니다.<br/>
          근무를 편성하는 방식에 대해 근무를 짜는 동기에게 물었었고 예전 기록을 보며 공정하게 편성해야 하고<br/>
          휴가자나 부상자 등을 고려해야 하기 때문에 당연히 사람이 해야 한다는 대답을 받았습니다.<br/>
          저는 프로그램을 이용해도 가능할 것 같다는 생각을 하였고 간부님의 허락을 받아 공정하게 보초 근무를 배정하는 프로그램을 만들었습니다.<br/>
          그 후 프로그램을 이용하여 근무 편성이 되었고 이를 보신 중대장님께 공로를 인정받아 상장과 함께 포상휴가를 받을 수 있었습니다.<br/>
          저는 이 경험으로 인해 사람이 하는 것이 당연하다 싶은 일들도<br/>
          다시 생각해보면 프로그램으로 만들어 더욱 편하고 공정하게 할 수 있다는 것을 알게 되었습니다.
          


        </animated.div>
      </Main2>
    </Main>
  );
};

export default Introduction;
