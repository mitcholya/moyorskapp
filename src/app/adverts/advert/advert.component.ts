import { StateService } from '../../store/state-service/state.service';
import { Advert } from '../advert';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvertComponent implements OnInit {

    @Input() advert: Advert = new Advert();
    isEditing$: Observable<boolean>;

  constructor(private state: StateService) { }

  ngOnInit() {
      this.isEditing$ = this.state.select(s =>
      !this.advert.uid ||
      !this.advert.author ||
      !this.advert.title  ||
      !this.advert.text   ||
       s.adverts.editing === this.advert.uid);
  }

}
