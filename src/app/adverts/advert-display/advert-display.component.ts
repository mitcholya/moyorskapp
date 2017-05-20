import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { AdvertsActions } from '../../store';
import { StateService } from '../../store/state-service/state.service';
import { Advert } from '../advert';

 
@Component({
  selector: 'app-advert-display',
  templateUrl: './advert-display.component.html',
  styleUrls: ['./advert-display.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvertDisplayComponent implements OnInit {

  @Input() advert: Advert = new Advert();

  constructor(
    private state: StateService
  ) { }

  ngOnInit() {
  }

  edit() {
        this.state.dispatch(new AdvertsActions.Edit(this.advert.uid));
  }

  delete() {
        if (this.advert.uid) {
            this.state.dispatch(new AdvertsActions.Delete(this.advert.uid));
        }
  }

}
