import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./employeesSlice";
import modalReducer from "./modalSlice";

const store = configureStore({
  reducer: {
    employees: employeesReducer,
    modal: modalReducer,
  },
});

export default store;
