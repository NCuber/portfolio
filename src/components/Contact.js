import styled from "styled-components";


const Main = styled.div`

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

const Contact = () => {
  return (
    <Main id="contact">
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
          <li>https://www.jobkorea.co.kr/User/Resume/View?rNo=20385311</li>
        </ul>
      </Content>

    </Main>
  );
};

export default Contact;
