import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


export let email: any = "noah.sinnott123@gmail.com"
//false
export let password: any = "1234";

export function setEmail(value: any) {
  email = value;
}
export function setPassword(value: any) {
  password = value;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class GlobalModule { }
