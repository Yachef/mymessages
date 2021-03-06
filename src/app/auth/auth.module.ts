import { NgModule } from "@angular/core"

import { AngularMaterialModule } from '../angular-material.module'
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { AuthRoutingModule } from "./auth-routing.module"

import { LoginComponent } from './login/login.component'
import { SignUpComponent } from './signup/signup.component'


@NgModule({
    declarations:[
        LoginComponent,
        SignUpComponent,
    ],
    imports:[
        AngularMaterialModule,
        CommonModule,
        FormsModule,
        AuthRoutingModule
    ]
})
export class AuthModule{}