import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incdec',
  templateUrl: './incdec.component.html',
  styleUrls: ['./incdec.component.css']
})
export class IncdecComponent implements OnInit {
  value =0;
  message:string;

  constructor() { }

  ngOnInit() {
  }
  increament(){
    if(this.value <15){
      this.value+=1;
      this.message="You can still Increase Value"
    }else{
      this.message ="Maximum Value Reached!"
    }
  }
  decrement(){
    if(this.value >0){
      this.value-=1;
      this.message ="You can still decrease Value";
    }else{
      this.message="Minimum Value Reached!"
    }
  }
}
