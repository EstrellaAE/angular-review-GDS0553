import { Component } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { MessageService } from 'primeng/api';
=======
>>>>>>> 6aa91eeaef74d443e02809e86717e73bd334ec34

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router){

  }
  logOut(){
    sessionStorage.clear()
    this.router.navigate(['/login'])
  }
}
