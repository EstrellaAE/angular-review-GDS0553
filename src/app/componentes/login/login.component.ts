import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { MessageService } from 'primeng/api';
=======
>>>>>>> 6aa91eeaef74d443e02809e86717e73bd334ec34

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required]]
  });
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
<<<<<<< HEAD
    private messageService: MessageService,
=======
>>>>>>> 6aa91eeaef74d443e02809e86717e73bd334ec34
    private router: Router
    ){}

  get email(){
    return this.loginForm.controls['email']
  }
  get password(){
    return this.loginForm.controls['password']
  }

  login(){
<<<<<<< HEAD
    console.log('Login')
    const {email, password}=this.loginForm.value;
=======
    const {email, password}=this.loginForm.value
>>>>>>> 6aa91eeaef74d443e02809e86717e73bd334ec34
    this.authService.getUserByEmail(email as string).subscribe(
      response=>{
        if(response.length> 0 && response[0].password == password){
          sessionStorage.setItem("email", email as string)
<<<<<<< HEAD
          this.router.navigate(['/home']);
        }else{
          this.messageService.add({severity: 'error', summary: 'Error', detail: 'Email o contraseña incorrecta'})
        }
      },
      error =>{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Email o contraseña incorrecta'})    
=======
          this.router.navigate(['/home'])

        }
      },
      error =>{
        
>>>>>>> 6aa91eeaef74d443e02809e86717e73bd334ec34
      }
    )

  }
}