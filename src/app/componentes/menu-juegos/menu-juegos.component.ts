import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router }   from '@angular/router';//rutas

@Component({
  selector: 'app-menu-juegos',
  templateUrl: './menu-juegos.component.html',
  styleUrls: ['./menu-juegos.component.css']
})
export class MenuJuegosComponent implements OnInit {

  constructor(public route: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('jugador');
    this.router.navigate(['/']);
    
  }

}
