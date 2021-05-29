import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageacceuilComponent} from './pageacceuil/pageacceuil.component';


const routes: Routes = [
  {path: 'pageacceuil', component: PageacceuilComponent},
  {path: '', redirectTo: "pageacceuil", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
