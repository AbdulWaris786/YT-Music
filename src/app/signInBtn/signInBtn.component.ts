import { Component, Input } from "@angular/core";

@Component({
    selector:'app-signup-btn',
    templateUrl:'./signInBtn.component.html',
    styleUrls:['./signInBtn.component.css']
})

export class signinBtnComponent {
   @Input() buttonStyle:string =''
}