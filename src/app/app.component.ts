import { Component, OnInit } from '@angular/core';
import { StateService } from './store/state-service/state.service';
import { GlobalActions } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

    constructor(
        private state: StateService
    ) {}

    ngOnInit() {
        this.state.dispatch(new GlobalActions.AppStart());
    }

}
