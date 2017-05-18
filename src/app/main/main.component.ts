import { Component, OnInit } from '@angular/core';
import { IsLoggedInGuard } from '../guards/isLoggedIn.guard';
import { LogInActions, NavActions } from '../store';
import { StateService } from '../store/state-service/state.service';

declare const window: Window;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

    userState$ = this.state.select(s => s.user);
    navState$ = this.state.select(s => s.nav);
    isLoggedIn$ = this.isLoggedInGuard.isLoggedIn();
    window = window;

  constructor(
        private state: StateService,
        private isLoggedInGuard: IsLoggedInGuard
    ) {

   }

  // ngOnInit() {
  //   console.log(this.isLoggedIn$);
  // }

      toggleNavigation() {
        this.state.dispatch(new NavActions.ToggleNavigation());
    }

      showLogInModal() {
        this.state.dispatch(new LogInActions.ShowModal());
        console.log(this.state);
    }

      logOut() {
        this.state.dispatch(new LogInActions.LogOut());
    }

}
