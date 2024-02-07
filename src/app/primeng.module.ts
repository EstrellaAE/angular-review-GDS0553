import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule} from 'primeng/inputtext';
import { CardModule} from 'primeng/card';
import { PasswordModule } from 'primeng/password';


//modulos primeng 
const modPrime: any = [
  CardModule,
  InputTextModule,
  ButtonModule,
  PasswordModule

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modPrime
  ],
  exports:[
    modPrime //Agregar arreglo de componentes 
  ]
})
export class PrimengModule { }
