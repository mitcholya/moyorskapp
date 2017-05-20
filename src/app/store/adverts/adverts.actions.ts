import { AdvertsActionTypes } from './adverts.actionTypes';
import { Action } from '@ngrx/store';
import { Advert } from '../../adverts/advert';

export namespace AdvertsActions {

    export class Edit implements Action {
        type = AdvertsActionTypes.Edit;
        /**
         * payload: uid
         */
        constructor(public payload: string | null) {}
    }

    export class CloseEdit implements Action {
        type = AdvertsActionTypes.CloseEdit;
        payload: void;
    }

    export class Update implements Action {
        type = AdvertsActionTypes.Update;
        /**
         * payload: name
         */
        constructor(public payload: Advert) {}
    }

    export class Delete implements Action {
        type = AdvertsActionTypes.Delete;
        /**
         * payload: uid
         */
        constructor(public payload: string) {}
    }

    export type AdvertsAction =
        Edit
        | CloseEdit
        | Update
        | Delete;
}