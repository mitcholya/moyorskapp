import {
    DefaultNavState,
    DefaultRouterState,
    DefaultTodosState,
    DefaultUserState,
    DefaultAdvertsState,
    NavState,
    TodosState,
    UserState,
    AdvertsState
} from './';
import { RouterState } from '@ngrx/router-store';

export interface AppState {
    user: UserState;
    router: RouterState;
    nav: NavState;
    todos: TodosState;
    adverts: AdvertsState
}

export const DefaultAppState: AppState = {
    user: DefaultUserState,
    router: DefaultRouterState,
    nav: DefaultNavState,
    todos: DefaultTodosState,
    adverts: DefaultAdvertsState
};
