import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatRoomComponent } from './component/chat-room/chat-room.component';
import { ContactComponent } from './component/contact/contact.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'chat-room',
    component: ChatRoomComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
