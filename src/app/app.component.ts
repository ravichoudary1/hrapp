import { Component, Input } from '@angular/core';
import { couService } from './course.services';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})




export class AppComponent {
  // title = "course";
  //   cou;  
       isSelected:boolean;

       @Input('textsel') isSel : String;

  constructor(Service: couService){
       
  //   this.cou = Service.getCourse();

  // }
  // isActive =false;
  
  // isClicked($event){
  //   $event.stopPropagation();
  //   console.log("Button Was Clicked" + $event);
  // }
  // isDivClicked($event){

  //   console.log("Div Was Clicked" + $event);
  }
  onClick(){
            this.isSel = "Ravi";
            this.isSelected=!this.isSelected;
            console.log("isSel");

  }
}

