import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../../model/user';
import {AuthenticationService} from '../../service/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Output()
  switchToRegister: EventEmitter<undefined> = new EventEmitter<undefined>();

  @Output()
  loginSuccessful: EventEmitter<undefined> = new EventEmitter<undefined>();

  formGroup: FormGroup;
  error: null|string = null;

  constructor(private fb: FormBuilder,
              private authenticationService: AuthenticationService) {
    this.formGroup = fb.group(new User());
  }

  ngOnInit(): void {
  }

  login() {
    const error = this.authenticationService.login(this.formGroup.value)
    if(error) {
      this.error = error;
    } else {
      this.loginSuccessful.emit();
    }
  }

}
