import { bindActionCreators } from '@reduxjs/toolkit';
import store from './store';

import * as todos from './lib/todos/actions';

export const actions = {
  todos: bindActionCreators(todos, store.dispatch)
}
