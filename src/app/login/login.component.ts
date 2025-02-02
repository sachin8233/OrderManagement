import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';
=======
import { UserAuthService } from '../_service/user-auth.service';
import { UserService } from '../_service/user.service';
>>>>>>> f8d9c49ac489eac1ab8655924375229386ecee0a

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private userService: UserService,
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login(loginForm: NgForm) {
    this.userService.login(loginForm.value).subscribe(
      (response: any) => {
        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);

        const role = response.user.role[0].roleName;
        if (role === 'Admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/user']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
<<<<<<< HEAD

  registerUser() {
    this.router.navigate(['/register']);
  }
=======
>>>>>>> f8d9c49ac489eac1ab8655924375229386ecee0a
}
