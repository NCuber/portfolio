import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

const Main = styled(animated.div)`

min-width: 1400px;
height: 400px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-sizing: border-box;
font-size: 1.3rem;

`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: bolder;
`;

const Content = styled.div`
  display:flex;
  line-height: 3rem;
`;

const Contact = (prop) => {

  const first = prop.focus > 0.93;

  const props = useSpring({
    y : first ? 0 : -100,
    opacity: first ? 1 : 0,
    config: config.slow,
  });

  return (
    <Main id="contact" style={props} >
      <Title> Contact </Title>
      <Content>
        <ul style={{listStyle:'none', fontWeight:'bold'}}>
          <li>EMAIL</li>
          <li>GITHUB</li>
          <li>이력서</li>
        </ul>
        <ul style={{listStyle:'none'}}>
          <li>ac020211@naver.com</li>
          <li>https://github.com/NCuber</li>
          <li>?</li>
        </ul>
      </Content>

    </Main>
  );
};

export default Contact;
