import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { OurServiceComponent } from './menus/our-service/our-service.component';

const routes: Routes = [
  {
    path: '', component: ContainerComponent,
    children: [
      { path: 'our-service', component: OurServiceComponent },
      { path: 'our-service/:id', component: OurServiceComponent }
    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule { }
