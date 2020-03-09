import { ADD_ONE } from "../actions/countAction";

const initialState = {
    count: 0
  };
  
  function countReducer(state = initialState, action: any) {
    if (action.type === ADD_ONE) {
        
        state.count = state.count + 1;
        console.log("State: " + state.count);
      }
      return state;
  };
  
  export default countReducer;