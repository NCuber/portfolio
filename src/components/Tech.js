import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  height: 50vw;
  background-color: skyblue;

  margin: 0 auto;
  display: flex;
  align-items: center;
}
`;



const List = styled.div`
  display: grid;
  width: 90%;
  height: 90%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.2fr 1fr 1fr;
  grid-gap: 10px 10px;
  margin: 0 auto;

`;

const Title = styled.div`
  font-size: 40pt;
  text-decoration: underline;
  font-weight: bold;
  letter-spacing: 3px;
  grid-column: 1/3;

  // text-shadow: 2px 2px;
  // word-spacing: 단어 사이 간격
  // text-align : 정렬
  // line-height: 줄간격
`;

const One1 = styled.div`
  border-style: solid;
  display: flex;
  grid-row: 2/4;

`;
const One = styled.div`
  border-style: solid;
  display: flex;
`;

const Tech = () => {
  return (
    <Main>
      <List>
        <Title>My Skill</Title>
        <One1></One1>
        <One></One>
        <One></One>
      </List>
    </Main>
  );
  // 1, 3번 우선, 게이지 모양은 스크롤시 반응하여 게이지로 표시
  /*
        <b>SPRING, REACT, MYSQL</b> <br />
      1. 이름 옆에 게이지 모양이 뜨며 오른쪽에 진행도 표시 <br /> 
      2. 이름 위에 언어 마크가 뜨며 이름 밑에 진행도 표시 <br />
      3. 마크 바깥에 원모양 게이지 표시
      */
};

export default Tech;
