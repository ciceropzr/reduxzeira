import { createStore } from "redux"

const initialState = {
  teste: 'teste',
}

function reducer(state = initialState, action) {
  // switch (action.type) {
  //   case 
  // }
  console.log(action)
  return state
}

const store = createStore(reducer);

export default store;