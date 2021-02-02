import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import {httpInterceptorProviders, HttpInterceptorService} from './http-interceptor.service';
import {AuthGuardService} from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HelloWorldComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [httpInterceptorProviders, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
