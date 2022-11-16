import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


export let email: any = false;

export let password: any = false;

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
