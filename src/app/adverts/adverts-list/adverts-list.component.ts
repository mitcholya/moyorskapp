import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { AdvertsActions } from '../../store';
import { StateService } from '../../store/state-service/state.service';
import { Advert } from '../advert';

@Component({
  selector: 'app-adverts-list',
  templateUrl: './adverts-list.component.html',
  styleUrls: ['./adverts-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvertsListComponent implements OnInit {

  @Input() advert: Advert = new Advert();

  constructor(
    private state: StateService
  ) { }

  ngOnInit() {
  }

}
