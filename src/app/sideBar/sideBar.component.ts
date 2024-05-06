import { Component } from "@angular/core";

@Component({
    selector:'app-side-bar',
    templateUrl:'./sideBar.component.html',
    styleUrls:['./sideBar.component.css']
})

export class sideBarComponent{
    buttonContent=[
        {text:'Home',icon:"bi bi-house-door-fill"},
        {text:'Explore',icon:"fa-regular fa-compass"},
        {text:'Library',icon:"bi bi-file-earmark-music"}
    ]
}