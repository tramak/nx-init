import { bindActionCreators } from '@reduxjs/toolkit';
import store from './store';

import * as todos from './lib/todos/actions';
import * as request from './lib/request/actions';

export const actions = {
  todos: bindActionCreators(todos, store.dispatch),
  request: bindActionCreators(request, store.dispatch),
}
