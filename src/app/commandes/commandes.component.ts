import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandeService } from './commande.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  name: any;
cmds : any[] = []
  constructor(private router: Router, private service: CommandeService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name')
    this.service.getAll().subscribe(data => {
      let datas = JSON.stringify(data)
      let res = JSON.parse(datas)
      
      this.cmds = res
      
console.log(data);

    })
  }
  goToAcceuil(){
    this.router.navigate(["/user"])
  }
  Getdetails(){
    this.router.navigate(['user']);  
      }
}
