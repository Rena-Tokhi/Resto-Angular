import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestoService } from '../resto.service';


@Component({
  selector: 'app-upddate-resto',
  templateUrl: './upddate-resto.component.html',
  styleUrls: ['./upddate-resto.component.css']
})
export class UpddateRestoComponent implements OnInit {
  editResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  });
  constructor(private router: ActivatedRoute, private resto: RestoService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id);
    this.resto.getCurrentResto(this.router.snapshot.params.id).subscribe((result) => {
      console.warn("result" , result)

    })
  }

}
