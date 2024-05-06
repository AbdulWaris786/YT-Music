import { Component, Input } from "@angular/core";

@Component({
    selector:"app-New-Releases",
    templateUrl:'./rowOne.component.html',
    styleUrls:['./rowOne.component.css']

})

export class newReleaseComponent{
    @Input() image : string =''
    @Input() title : string =''
    @Input() artist : string =''
}