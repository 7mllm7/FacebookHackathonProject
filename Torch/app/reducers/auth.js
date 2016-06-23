import { createReducer } from 'reduxsauce';
import Types from '../actions/types';
const initialState = {};

const ACTION_HANDLERS = {}

export default createReducer(initialState, ACTION_HANDLERS)
