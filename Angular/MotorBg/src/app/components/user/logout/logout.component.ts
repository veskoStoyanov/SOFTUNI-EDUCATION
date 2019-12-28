import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  
      this.userService
      .logout()
      .subscribe(data => {
        window.sessionStorage.clear()
      })
    
  } 
}
