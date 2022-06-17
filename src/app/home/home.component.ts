import { Component, OnInit,ViewEncapsulation} from '@angular/core';
declare var external:any 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class HomeComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  ngAfterViewInit():void{
    external.varinit();
  }

}
