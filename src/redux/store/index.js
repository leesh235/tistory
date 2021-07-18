import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const create = (reducers) => {
  return createStore(reducers ,composeWithDevTools());
}

export default create;