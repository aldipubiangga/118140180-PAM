import { Merah, Putih } from "./tipe";
const initData = {
  counter: "white",
};
export const reducerCounter = (state = initData, action) => {
  switch (action.type) {
    case Merah:
      return { ...state, counter: action.data };
    case Putih:
      return { ...state, counter: action.data };
    default:
      return state;
  }
};
