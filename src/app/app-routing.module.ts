import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

// Routes are generated with `ng generate component $name
// We also need to import them on this page like above

// This is where we will add our routes in the array below:
//each route gets it's own object within the array
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'list', component: ListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
