import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AdvertDisplayComponent } from './advert-display/advert-display.component';
import { AdvertsService } from './adverts.service';
import { AdvertEditComponent } from './advert-edit/advert-edit.component';
import { AdvertComponent } from './advert/advert.component';
import { AdvertsListComponent } from './adverts-list/adverts-list.component';

@NgModule({
  imports: [
    // CommonModule,
    SharedModule
  ],
  declarations: [
    AdvertDisplayComponent,
    AdvertEditComponent,
    AdvertComponent,
    AdvertsListComponent
  ],
  providers: [
    AdvertsService
  ],
  exports: [
    AdvertComponent,
    AdvertEditComponent,
    AdvertDisplayComponent
  ]
})
export class AdvertsModule { }
