<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
=======
import { Component } from '@angular/core';
>>>>>>> f8d9c49ac489eac1ab8655924375229386ecee0a

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
<<<<<<< HEAD
export class UserComponent implements OnInit {

  message;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.forUser();
  }

  forUser() {
    this.userService.forUser().subscribe(
      (response) => {
        console.log(response);
        this.message = response;
      }, 
      (error)=>{
        console.log(error);
      }
    );
  }
=======
export class UserComponent {

>>>>>>> f8d9c49ac489eac1ab8655924375229386ecee0a
}
