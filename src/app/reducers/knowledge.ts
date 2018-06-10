import { compose } from '@ngrx/core';
import { combineReducers } from '@ngrx/store';
import { ActionReducer, Action } from '@ngrx/store';
import { createSelector } from 'reselect';
import * as knowledge from '../actions/knowledge';
export const CHANGE: Action = {
  type: 'CHANGE'
}
export interface State {
  response: any;
}

const initialState: State = {
  response: {}
};
export function reducer(state: State = initialState, action: knowledge.Actions): State {
  switch (action.type) {
    case knowledge.ActionTypes.CHANGE: {
      const response = action.payload;
      return Object.assign({}, state, {
        response: response
      });
    }
    default: {
      return state;
    }
  }
}
export const getresponse = (state: State) => state.response;
