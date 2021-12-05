import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { EditApplicationComponent } from './edit-application/edit-application.component';
import { MoveToAnotherHostComponent } from './move-to-another-host/move-to-another-host.component';

const routes: Routes = [
  {
    path: 'application',
    component: ApplicationComponent,
  },
  {
    path: 'edit-app',
    component: EditApplicationComponent,
  },
  {
    path: 'move',
    component: MoveToAnotherHostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
