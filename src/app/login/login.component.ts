import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  errorMessage = 'Ошибка входа в систему';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthService) { }

  ngOnInit(): void {
  }
  handleLogin(): void {
    this.authenticationService.authenticationService(this.username, this.password).subscribe((result) => {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigateByUrl('/hello-world');
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }
}
