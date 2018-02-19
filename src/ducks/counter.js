// TYPES

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// ACTION BUILDERS

export function increment(num) {
  return {
    type: INCREMENT,
    num: num
  };
}

export function decrement(num) {
  return {
    type: DECREMENT,
    num: num
  };
}

let initialState = {
  value: 0
};

// REDUCER

export default function reducer(state = initialState, action) {
  // This is what state = initial state is doing
  // if(state == null || state == undefined) {
  // state = initialState
  // }

  switch (action.type) {
    case INCREMENT:
      let incVal = action.num + state.value;
      return Object.assign({}, state, { value: incVal });

    case DECREMENT:
      let decVal = state.value - action.num;
      return Object.assign({}, state, { value: decVal });
  }
  return state;
}


