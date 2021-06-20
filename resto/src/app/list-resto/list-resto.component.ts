import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service'
  
@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
 collection : any = {};
  constructor( private resto:RestoService) { }

 
  ngOnInit(): void {
    this.resto.getList().subscribe((result) => {
      console.warn(result)
      this.collection = result
    })
  }

} 
