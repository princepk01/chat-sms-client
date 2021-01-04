import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { ChatRoomComponent } from './component/chat-room/chat-room.component';
import { ContactComponent } from './component/contact/contact.component';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ChatRoomComponent,
    ContactComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
