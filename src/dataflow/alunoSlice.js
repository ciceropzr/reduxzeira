import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  aluno: null,
}

export const alunoSlice = createSlice({
  name: 'aluno',
  initialState,
  reducers: {
    setAlunoStore(state, { payload }) {
      return {
        ...state,
        aluno: payload,
      }
    },
  }
})

// Exportando as actions
export const { setAlunoStore } = alunoSlice.actions

export const alunoStore = state => state.aluno

export default alunoSlice.reducer