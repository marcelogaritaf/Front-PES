import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-compoment',
  templateUrl: './home-compoment.component.html',
  styleUrls: ['./home-compoment.component.css']
})
export class HomeCompomentComponent {
  constructor(private router: Router){

  }
  navegar(){
    this.router.navigate(['/Boletin'])
  }
  agregar(){
    this.router.navigate(['/Boletin'])
  }
}
