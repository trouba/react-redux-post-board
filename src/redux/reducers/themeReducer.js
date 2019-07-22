
import { 
  APPLY_THEME
} from '../actions/actionTypes';

const initialThemeState = 'default'

export default function themeReducer(state = initialThemeState, action) {
  switch(action.type){
    case APPLY_THEME:
      return action.data.theme;
    default:
      return state;
  }
}