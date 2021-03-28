import { useSpring, animated } from "react-spring";
import "../scss/Title.scss";

const Title = () => {
  const props = useSpring({ opacity: 0.5, y: 0, config:{mass:2, tension:150, friction:20}, from: { opacity: 0, y: 50 } });
  return (
    <animated.div style={props} className="Title">
      <b>포트 폴리오 제목</b> <br />
    </animated.div>
    // use spring xys 에서 y - 20 에서 y로 올리기
    // 현재 브라우저 크기에 동적으로 반응 가로 : 화면크기 가로, 세로 100%
    // 가로 세로 가운데 정렬 하기
  );
};

export default Title;
