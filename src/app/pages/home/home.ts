import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit{

ngOnInit(){
    console.log("HOME COMPONENT")
}

}
