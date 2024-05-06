import { Component, Input } from "@angular/core";

@Component({
    selector:'app-side-button',
    templateUrl:'./sidebutton.component.html',
    styleUrls:['./sidebutton.component.css']
})

export class sideButtonComponent{
    @Input() text:string=''
    @Input() icon:string=''
}