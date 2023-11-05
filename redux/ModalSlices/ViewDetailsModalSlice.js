import { createSlice } from "@reduxjs/toolkit";

export const viewDetailsModalSlice = createSlice({
  name: "viewDetailsModalSlice",
  initialState: {
    isOpen: false,
  },
  reducers: {
    onOpen: (state) => {
      state.isOpen = true;
    },
    onClose: (state) => {
      state.isOpen = false;
    },
  },
});

export const { onOpen, onClose } = viewDetailsModalSlice.actions;

export default viewDetailsModalSlice.reducer;
