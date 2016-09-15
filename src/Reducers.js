import { UPDATE_TEXT } from './Actions';

function previewer(state={text: ""}, action){
  switch (action.type){
    case UPDATE_TEXT:
      return { text: action.text };
    default:
      return state;
  }
}

export default previewer;
