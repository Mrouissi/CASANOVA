import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisponibilityService } from './disponibility.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-disponibility',
  templateUrl: './disponibility.component.html',
  styleUrls: ['./disponibility.component.css'],
  providers: [DatePipe]
})
export class DisponibilityComponent implements OnInit {
  name: any;
  check:any;
  date: any;
  constructor(private router: Router, private service: DisponibilityService, private datePipe: DatePipe) { }
  first : any ;
  second : any ;

  ngOnInit(): void {
    this.name =localStorage.getItem('name')
    }
    goToAcceuil(){
      this.router.navigate(["/user"])
    }
    save(){
        if(this.check == "date"){
          this.date = this.datePipe.transform(this.date, 'dd/MM/yyyy');
          this.service.adddispo(this.date).subscribe(data =>{
            console.log(data);
            console.warn("toto firt")
          })
        }else{
          if ( this.first !== null && this.second !== null ){
            this.first = this.datePipe.transform(this.first, 'dd/MM/yyyy');
            this.second = this.datePipe.transform(this.second, 'dd/MM/yyyy');
            this.service.adddispoTwoDates(this.first, this.second).subscribe(data =>{
              console.log(data);
              console.warn("checkingfirst2")
            })
          }
    }
}
  onDate(event: any) {
      this.date = event
      console.log(event);
  }

  onDateFirst(event: any) {
    this.first = event
    console.log(event);
  }

  onDateSecond(event: any){
    this.second = event
    console.log(event);
  }
}
