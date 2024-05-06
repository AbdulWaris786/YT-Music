import { Component } from "@angular/core";

@Component({
    selector:'app-main-body',
    templateUrl:'./mainBody.component.html',
    styleUrls:['./mainBody.component.css']

})

export class mainBodyComponent{
    optionContent=[
        {text:"Work Out"},
        {text:"Feel Good"},
        {text:"Podcasts"},
        {text:"Energise"},
        {text:"Romance"},
        {text:"Relax"},
        {text:"Party"},
        {text:"Commute"},
        {text:"Sad"},
        {text:"Focus"},
        {text:"Sleep"}

    ]
    newReleases =[
        {image:"assets/images/avesham.jpeg",title:"Avesham(orginal motion picture)",artist:"Album.Sushin shyam"},
        {image:"https://samplesongs.netlify.app/album-arts/death-bed.jpg",title:"Death Bed",artist:"Album.Powfu"},
        {image:"https://samplesongs.netlify.app/album-arts/bad-liar.jpg",title:"Bad Liar",artist:"Album.Imagine Dragons"},
        {image:"https://samplesongs.netlify.app/album-arts/faded.jpg",title:"Faded",artist:"Album.Alan Walker"},
        {image:"https://samplesongs.netlify.app/album-arts/hate-me.jpg",title:"Hate Me",artist:"Album.Ellie Goulding"},
        {image:"https://samplesongs.netlify.app/album-arts/solo.jpg",title:"Solo",artist:"Album.Clean Bandit"},
        {image:"https://samplesongs.netlify.app/album-arts/without-me.jpg",title:"Without Me",artist:"Album.Halsey"},
        {image:"assets/images/avesham.jpeg",title:"Avesham(orginal motion picture)",artist:"Album.Sushin shyam"},
        {image:"https://samplesongs.netlify.app/album-arts/death-bed.jpg",title:"Death Bed",artist:"Album.Powfu"},
        {image:"https://samplesongs.netlify.app/album-arts/bad-liar.jpg",title:"Bad Liar",artist:"Album.Imagine Dragons"},
    ]
    
}