import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel2',
  templateUrl: './panel2.component.html',
  styleUrls: ['./panel2.component.css']
})
export class Panel2Component implements OnInit {
  listNombres=[
	'Juan','pedro',
	'fatima','anastasia',
	'viri','aurelia'
	];
  constructor() { }

  ngOnInit() {
  }

}
