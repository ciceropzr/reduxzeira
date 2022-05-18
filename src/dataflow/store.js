import { configureStore } from "@reduxjs/toolkit";
import alunoSlice from "./alunoSlice";

export default configureStore({
  reducer: {
    aluno: alunoSlice
  },
})