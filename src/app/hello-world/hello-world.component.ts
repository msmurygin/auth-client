import { Component, OnInit } from '@angular/core';
import {AuthService} from '../login/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  constructor(  private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  logOut(): void {
    this.auth.logout().subscribe(response => {
      this.router.navigate(['/login']);
    });
  }
}
