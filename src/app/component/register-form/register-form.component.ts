import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../../model/user';
import {AuthenticationService} from '../../service/authentication.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  @Output()
  exitRegistration: EventEmitter<undefined> = new EventEmitter<undefined>();

  formGroup: FormGroup;
  error: null|string = null;

  constructor(private fb: FormBuilder,
              private authenticationService: AuthenticationService) {
    this.formGroup = fb.group(new User());
  }

  ngOnInit(): void {
  }

  register($event: Event) {
    console.log(this.formGroup.value);
    const error = this.authenticationService.register(this.formGroup.value);
    if (error) {
      this.error = error;
    } else {
      this.exitRegistration.emit();
    }
  }
}
