import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  name: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name')
  }
  goToAcceuil(){
    this.router.navigate(["/user"])
  }
}
