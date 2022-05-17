import { Component } from '@angular/core';

export enum State {
  LOGIN, REGISTER, AUTHENTICATED
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LNDF 2022 | Warum ist mein Passwort nicht sicher?';

  state: State = State.LOGIN;


  showRegistration() {
    this.state = State.REGISTER;
  }

  isLogin() {
    return this.state == State.LOGIN;
  }

  isRegistration() {
    return this.state == State.REGISTER;
  }

  isAuthenticated() {
    return this.state == State.AUTHENTICATED;
  }

  showLogin() {
    this.state = State.LOGIN;
  }

  authenticated() {
    this.state = State.AUTHENTICATED
  }
}
