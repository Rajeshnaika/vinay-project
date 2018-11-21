import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  value = 0;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  increament(){
    this.value ++;
    this.navTO()
  }
  navTO(){
    this.router.navigate(['/sample']);
  }

}
