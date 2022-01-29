import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const create = (reducers: any) => {
  return createStore(reducers ,composeWithDevTools());
}

export default create;