import { createStore } from "redux"

const initialState = {
  aluno: null,
}

function reducers(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case "SET_ALUNO":
      return {
        ...state,
        aluno: action.aluno,
      }
    default:
      return state
  }
}

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;