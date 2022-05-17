import { Injectable } from '@angular/core';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private users: User[] = [new User('admin', 'admin', 'Administrator')];
  private currentUser: User|null = null;

  constructor() {
  }

  login(user: User): string|null {
    const foundUser = this.users.find(u => u.username == user.username && u.password == user.password);
    if (foundUser) {
      this.currentUser = foundUser;
      return null;
    } else {
      return "Login fehlgeschlagen";
    }
  }

  register(user: User): string|null {
    if (!user.name || !user.username || !user.password) {
      return "Bitte alle Felder ausfüllen.";
    }

    if (this.usernameExists(user.username)) {
      return "Der Benutzername existiert bereits.";
    }

    this.users.push(user);

    return null;
  }

  private usernameExists(username: string) {
    return this.users.findIndex(user => user.username == username) != -1;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  logout() {
    this.currentUser = null;
  }
}
