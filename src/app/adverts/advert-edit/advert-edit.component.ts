import { assign } from '../../helpers/assign';
import { FormComponent } from '../../helpers/form.component';
import { Messages } from '../../resources/messages';
import { AdvertsActions } from '../../store';
import { StateService } from '../../store/state-service/state.service';
import { minLength } from '../../validators';
import { Advert } from '../advert';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-advert-edit',
  templateUrl: './advert-edit.component.html',
  styleUrls: ['./advert-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvertEditComponent extends FormComponent implements OnInit {

    @Input() advert: Advert = new Advert();
    @Input() cancelable = true;

    controlNames = {
        author: 'author',
        title: 'title',
        text: 'text'
    };

    formGroup;

  constructor(
        private state: StateService,
        private formBuilder: FormBuilder
  ) {
     super();
   }

  ngOnInit() {
        this.formGroup = this.formBuilder.group({
            [this.controlNames.author]: [this.advert.author, minLength(Messages.Validation.TodoNameMinLength)(1)],
            [this.controlNames.title]: [this.advert.title, minLength(Messages.Validation.TodoNameMinLength)(1)],
            [this.controlNames.text]: [this.advert.text, minLength(Messages.Validation.TodoNameMinLength)(1)]
        });
  }

    save() {
        if (this.formGroup.valid) {
            this.state.dispatch(new AdvertsActions.Update(assign(this.advert, {
                author: this.getFormValue(this.controlNames.author),
                title: this.getFormValue(this.controlNames.title),
                text: this.getFormValue(this.controlNames.text)
            })));
            this.formGroup.controls[this.controlNames.author].setValue('');
            this.formGroup.controls[this.controlNames.author].reset();
            this.formGroup.controls[this.controlNames.title].setValue('');
            this.formGroup.controls[this.controlNames.title].reset();
             this.formGroup.controls[this.controlNames.text].setValue('');
            this.formGroup.controls[this.controlNames.text].reset();
        }
    }

    cancel() {
        this.state.dispatch(new AdvertsActions.CloseEdit());
    }

}

