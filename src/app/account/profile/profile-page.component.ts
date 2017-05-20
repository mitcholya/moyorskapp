import { TodosService } from '../../todos/todos.service';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AdvertsService } from '../../adverts/adverts.service';

@Component({
    templateUrl: './profile-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePageComponent {

    todos$ = this.todosService.todos();
    adverts$ = this.advertsService.adverts();

    constructor(
        private todosService: TodosService,
        private advertsService: AdvertsService
        ) {}
}
