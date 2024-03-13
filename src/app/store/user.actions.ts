import { createAction, props } from '@ngrx/store';

export const setuser = createAction(
    'Add User',
    props<{ username: string }>()
);

  