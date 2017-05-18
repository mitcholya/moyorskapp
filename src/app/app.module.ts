import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FeaturesComponent } from './features/features.component';
import { VideoComponent } from './video/video.component';
import { PriceComponent } from './price/price.component';
import { DiscountComponent } from './discount/discount.component';
import { FooterComponent } from './footer/footer.component';



import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AppRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { AccountModule } from './account/account.module';
import { CustomErrorHandler } from './error-handler/custom-error-handler';
import { IsLoggedInGuard } from './guards/isLoggedIn.guard';
import { IsNotLoggedInGuard } from './guards/isNotLoggedIn.guard';
import { IsPasswordUserGuard } from './guards/isPasswordUser.guard';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SharedModule } from './shared/shared.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DefaultAppState } from './store/app.state';
import { StateService } from './store/state-service/state.service';
import { Reducer, RunEffects } from './store/store.config';
import { TodosModule } from './todos/todos.module';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FeaturesComponent,
    VideoComponent,
    PriceComponent,
    DiscountComponent,
    FooterComponent,
    LandingPageComponent,
    SignUpComponent,
    LogInComponent,
    ResetPasswordComponent,
    NavComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    TodosModule,
    RouterModule.forRoot(AppRoutes),
    StoreModule.provideStore(Reducer, DefaultAppState),
    RouterStoreModule.connectRouter(),
    ...RunEffects(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AccountModule
  ],
  providers: [
        StateService,
        IsLoggedInGuard,
        IsNotLoggedInGuard,
        IsPasswordUserGuard,
        { provide: ErrorHandler, useClass: CustomErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
