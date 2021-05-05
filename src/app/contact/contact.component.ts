import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from './contact.service';

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
  user = {
    'message' : ''
  }
  constructor(private router: Router , private service : ContactService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name')
  }

 save(event:any){
this.service.addComment(this.user.message).subscribe(data=>{
  console.log(data);

})
   console.log(event);
   
 }

 
  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }
 
  
  goToAcceuil(){
    this.router.navigate(["/user"])
  }

}
