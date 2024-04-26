import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'adoptions',
  standalone: true,
  imports: [],
  templateUrl: './adoptions.html',
  styleUrl: './adoptions.css'
})
export class AdoptionsComponent implements OnInit{

ngOnInit(){
    console.log("ADOPTIONS COMPONENT")
}

}
