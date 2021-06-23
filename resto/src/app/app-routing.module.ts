import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { UpddateRestoComponent } from './upddate-resto/upddate-resto.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent} from './register/register.component';


const routes: Routes = [
  {
    component:AddRestoComponent,
    path:'add'
  },
  {
    component:ListRestoComponent,
    path:'list'
  },
  {
    component:UpddateRestoComponent,
    path:'update/:id'
  },
  {
    component:LoginComponent,
    path:'login'
  },
  {
    component:RegisterComponent,
    path:'register'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
