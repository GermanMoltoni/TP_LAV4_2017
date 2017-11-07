import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router }   from '@angular/router';//rutas

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {
public inputMail;
public registroForm;
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }
  onClick(){

  }

}
