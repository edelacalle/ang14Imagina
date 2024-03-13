import { createReducer, on } from '@ngrx/store';
import { setuser } from './user.actions';

export const initialState = "Invitado";

export const userReducer = createReducer(
  initialState,
  on(setuser, (state,payload:any) => state = payload.username),
);