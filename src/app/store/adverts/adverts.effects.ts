import { AdvertsService } from '../../adverts/adverts.service';
import { StateService } from '../state-service/state.service';
import { AdvertsActions } from './adverts.actions';
import { AdvertsActionTypes } from './adverts.actionTypes';
import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';

@Injectable()

export class AdvertsEffects {

    @Effect({ dispatch: false })
    update$ = this.state.actions$.ofType(AdvertsActionTypes.Update)
        .map((action: AdvertsActions.Update) => action.payload)
        .switchMap(advert => {
            if (!advert.uid) {
                const ref = this.advertsService.adverts().push({
                    author: advert.author,
                    title: advert.title,
                    text: advert.text

                });
                return ref.set({
                    author: advert.author,
                    title: advert.title,
                    text: advert.text,
                    uid: ref.key
                });
            } else {
                return this.advertsService.advert(advert.uid).set(advert);
            }
        });

    @Effect({ dispatch: false })
    delete$ = this.state.actions$.ofType(AdvertsActionTypes.Delete)
        .map((action: AdvertsActions.Delete) => action.payload)
        .map(uid => this.advertsService.advert(uid).remove());

    constructor(
        private state: StateService,
        private advertsService: AdvertsService
    ) {}
}