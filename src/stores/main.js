import { createStore } from 'redux';
import navigation from '../reducers/main';

let store = createStore(navigation);
