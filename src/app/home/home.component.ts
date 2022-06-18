import { Component, OnInit,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class HomeComponent implements OnInit {
  myScriptElement: HTMLScriptElement ;
  constructor() { 
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src ="/assets/js/push_nav.js";
    document.body.appendChild(this.myScriptElement);
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src ="/assets/js/particles.min.js";
    document.body.appendChild(this.myScriptElement);
  }

  ngOnInit(): void {
   
  }

  ngAfterViewInit():void{
  
  }

}
