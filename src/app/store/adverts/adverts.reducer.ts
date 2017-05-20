import { AdvertsActions } from '../';
import { assign } from '../../helpers/assign';
import { AdvertsActionTypes } from './adverts.actionTypes';
import { DefaultAdvertsState, AdvertsState } from './adverts.state';
import { ActionReducer } from '@ngrx/store';

export const AdvertsReducer: ActionReducer<AdvertsState> = (state = DefaultAdvertsState, action) => {

    switch (action.type) {

        case AdvertsActionTypes.Edit: {
            const uid = (action as AdvertsActions.Edit).payload;
            return assign(state, { editing: uid });
        }

        case AdvertsActionTypes.Update:
        case AdvertsActionTypes.CloseEdit: {
            const uid = (action as AdvertsActions.Edit).payload;
            return assign(state, { editing: '' });
        }
    }

    return state;
};