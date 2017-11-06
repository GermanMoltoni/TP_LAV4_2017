import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  ngOnInit() {
  }

}
