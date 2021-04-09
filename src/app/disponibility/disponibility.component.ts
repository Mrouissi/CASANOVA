import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disponibility',
  templateUrl: './disponibility.component.html',
  styleUrls: ['./disponibility.component.css']
})
export class DisponibilityComponent implements OnInit {
  name: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.name =localStorage.getItem('name')

  }
  goToAcceuil(){
    this.router.navigate(["/user"])
  }
}
