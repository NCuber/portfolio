import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import img1 from "../img/project1-1.png";
import img2 from "../img/project1-2.png";
import img3 from "../img/project1-3.png";
import img4 from "../img/project1-4.png";
import img5 from "../img/project1-5.png";

// 좌측 상단 그림은 밑에 스크린샷 목록에서 클릭시 표시, 디폴트는 목록 1번째 사진
// 좌측 상단 그림을 클릭시 모달창으로 확대
// 하단 그림을 클릭하면 좌측상단 그림을 그것으로 교체
// CLICK, CHANGE,

const CLICK_FOCUS = 'projects/CLICK_FOCUS';
const CLICK_CHANGE = "projects/CLICK_CHANGE";

const initialState = {
  focusimg: img1,
  imgs: [
    {
      id: 1,
      text: "채팅 테스트",
      img: img1,
    },
    {
      id: 2,
      text: "방 만들기",
      img: img2,
    },
    {
      id: 3,
      text: "게임 정보",
      img: img3,
    },
    {
      id: 4,
      text: "게임 랭킹",
      img: img4,
    },
    {
      id: 5,
      text: "내 게임 목록",
      img: img5,
    },
  ],
};

export const change = createAction(CLICK_CHANGE, (img) => img);
export const focus = createAction(CLICK_FOCUS, (id) => id);

const projects = handleActions(
  {
    [CLICK_CHANGE]: (state, { payload: img }) =>
      produce(state, (draft) => {
        draft.focusimg = img;
      }),

      
  },
  initialState,
);

export default projects;
