import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { IsLoggedInGuard } from '../guards/isLoggedIn.guard';
import { Advert } from './advert';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class AdvertsService {

  authUid = '';

  constructor(
    private firebase: AngularFire
  ) {
    this.firebase.auth.subscribe(a => this.authUid = a ? a.uid : '');
   }

    adverts(): FirebaseListObservable<Advert[]> {
        return this.firebase.database.list(`/advert/${this.authUid}`);
    }

    advert(uid: string): FirebaseObjectObservable<Advert> {
        return this.firebase.database.object(`/adverts/${this.authUid}/${uid}`);
    }

}
