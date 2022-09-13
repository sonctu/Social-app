import { createSlice } from "@reduxjs/toolkit";

interface ModalInitialState {
  isOpenPost: boolean;
  isOpenComment: boolean;
}
const initialState: ModalInitialState = {
  isOpenPost: false,
  isOpenComment: true,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModalPost: (state, action) => {
      state.isOpenPost = action.payload;
    },
    hideModalPost: (state, action) => {
      state.isOpenPost = action.payload;
    },
    showModalComment: (state, action) => {
      state.isOpenComment = action.payload;
    },
    hideModalComment: (state, action) => {
      state.isOpenComment = action.payload;
    },
  },
});

export const {
  showModalPost,
  hideModalPost,
  showModalComment,
  hideModalComment,
} = modalSlice.actions;
export default modalSlice.reducer;
