import { configureStore } from "@reduxjs/toolkit";
import viewDetailsModalReducer from "./ModalSlices/ViewDetailsModalSlice";

const store = configureStore({
  reducer: {
    ViewDetailsModal: viewDetailsModalReducer,
  },
});

export default store;
