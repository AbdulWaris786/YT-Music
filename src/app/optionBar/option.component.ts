import { Component, Input } from "@angular/core";

@Component({
    selector:'app-option-bar',
    templateUrl:'./option.component.html',
    styleUrls:['./option.component.css']
})

export class optionBarComponent {
    @Input() text:string=''
}