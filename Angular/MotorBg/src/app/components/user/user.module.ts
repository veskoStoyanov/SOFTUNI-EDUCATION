import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { UserService } from '../../services/user/user.service';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
    declarations: [
        RegisterComponent,
        LoginComponent,
        LogoutComponent,

    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forRoot([
            { path: 'login', component: LoginComponent },
            { path: 'logout', component: LogoutComponent },
            { path: 'register', component: RegisterComponent },
        ])],
    providers: [UserService]
})
export class UserModule { }