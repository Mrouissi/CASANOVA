import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: any;
  max = 10;
  rate = 7;
  isReadonly = false;
  overStar: number | undefined;
  percent!: number;
  y : any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name')
  }

 
 
 
  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }
 
  
  goToAcceuil(){
    this.router.navigate(["/user"])
  }

}
