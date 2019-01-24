import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import weather from '../containers/Widget/reducer';


export default (history) => combineReducers({
  router: connectRouter(history),
  weather,
});
