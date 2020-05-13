import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinkComponent } from './link/link.component';
import { BodyComponent } from './body/body.component';


const routes: Routes = [
  {
    path: 'link',
    component: LinkComponent
  },
  {
    path: 'home',
    component: BodyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
