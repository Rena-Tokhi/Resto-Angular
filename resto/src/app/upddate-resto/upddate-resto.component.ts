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
  alert :boolean = false;
  editResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  });
  constructor(private router: ActivatedRoute, private resto: RestoService) { }

  ngOnInit(): void {

    console.warn(this.router.snapshot.params.id);
    this.resto.getCurrentResto(this.router.snapshot.params.id).subscribe((result :any) => {
     this.editResto = new FormGroup({
        name: new FormControl(result['name']),
        email: new FormControl(result['email']),
        address: new FormControl(result['address'])
      });
    })
  }

  collection(){
    this.alert = true;
    this.resto.updateResto(this.router.snapshot.params.id , this.editResto.value).subscribe((result)=>{
      console.warn(result)
    })
    console.warn(this.editResto.value);
  }
  closeAlert(){
    this.alert = false;
  }

}
