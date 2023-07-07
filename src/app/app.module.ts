import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HasRoleDirective } from './directives/has-role.directive';
import { AuthInterceptorProvaider } from './interceptor/auth.interceptor';

@NgModule({
  declarations: [AppComponent, HasRoleDirective],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule],
  providers: [AuthInterceptorProvaider],
  bootstrap: [AppComponent],
})
export class AppModule {}
