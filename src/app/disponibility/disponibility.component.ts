import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisponibilityService } from './disponibility.service';

@Component({
  selector: 'app-disponibility',
  templateUrl: './disponibility.component.html',
  styleUrls: ['./disponibility.component.css']
})
export class DisponibilityComponent implements OnInit {
  name: any;
check:any;
  date: any;
  constructor(private router: Router, private service: DisponibilityService) { }
first : any ;
second : any ;

  ngOnInit(): void {
    this.name =localStorage.getItem('name')

  }
  goToAcceuil(){
    this.router.navigate(["/user"])
  }
  save(){
if( this.check == "date"){
  this.service.adddispo(this.date).subscribe(data =>{
    console.log(data);
    
  })
}else{
  if ( this.first !== null && this.second !== null ){
    let dateS = this.first + "---" + this.second
    this.service.adddispo(dateS).subscribe(data =>{
      console.log(data);
      
    })
  }
}
  }
  onDate(event: any) {
    this.date = event
    console.log(event);
    
  } onDateFirst(event: any) {
  this.first = event
    console.log(event);
    
  } onDateSecond(event: any) {
    this.second = event
    console.log(event);
    
  }
}
