import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';
=======
import { UserAuthService } from '../_service/user-auth.service';
import { UserService } from '../_service/user.service';
>>>>>>> f8d9c49ac489eac1ab8655924375229386ecee0a

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private userAuthService: UserAuthService,
    private router: Router,
    public userService: UserService
  ) {}

  ngOnInit(): void {}

  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }
<<<<<<< HEAD

=======
 
>>>>>>> f8d9c49ac489eac1ab8655924375229386ecee0a
  public logout() {
    this.userAuthService.clear();
    this.router.navigate(['/']);
  }
<<<<<<< HEAD

  public isAdmin() {
    return this.userAuthService.isAdmin();
  }

  public isUser() {
=======
  public isAdmin(){
   return this.userAuthService.isAdmin();
  }
  public isUser(){
>>>>>>> f8d9c49ac489eac1ab8655924375229386ecee0a
    return this.userAuthService.isUser();
  }

}
