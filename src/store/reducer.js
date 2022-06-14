import { ADD_CHECK_BOX_ELEMENTS,DELETE_CHECK_BOX_ELEMENTS,ONCHECK_ELEMENT  } from "./actiontypes";

const initialState = {
    chekeckedElements:[],
    checkElements :[]
    
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case ADD_CHECK_BOX_ELEMENTS:
        return {
          ...state,
          chekeckedElements:   [...state.chekeckedElements, action.payload]
        };
      case ONCHECK_ELEMENT:
        return {
          ...state,
          checkElements: action.payload
        };
    case DELETE_CHECK_BOX_ELEMENTS:
        return {
          ...state,
          chekeckedElements:action.payload
        };
      default:
        return state;
    }
  }