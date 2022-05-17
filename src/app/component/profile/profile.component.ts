import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthenticationService} from '../../service/authentication.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Output()
  private logout: EventEmitter<undefined> = new EventEmitter<undefined>();

  user: User | null = null;

  constructor(private authenticationService: AuthenticationService) {
    const user = authenticationService.getCurrentUser();
    if (user) {
      this.user = user;
    } else {
      this.doLogout();
    }
  }

  ngOnInit(): void {
  }

  doLogout() {
    this.authenticationService.logout();
    this.logout.emit();
  }

}
