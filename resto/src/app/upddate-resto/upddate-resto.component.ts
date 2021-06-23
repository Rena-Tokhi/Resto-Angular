import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-upddate-resto',
  templateUrl: './upddate-resto.component.html',
  styleUrls: ['./upddate-resto.component.css']
})
export class UpddateRestoComponent implements OnInit {
  editResto = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    address : new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }

}
