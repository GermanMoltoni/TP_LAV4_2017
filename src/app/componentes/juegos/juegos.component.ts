import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router }   from '@angular/router';//rutas

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  constructor(public route: ActivatedRoute,
    public router: Router) { }


  ngOnInit() {
    console.log()
    if(localStorage.getItem('token') == null || localStorage.getItem("jugador") == null)
      this.router.navigate(['/']);
  }

}