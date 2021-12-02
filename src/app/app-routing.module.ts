import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { EditApplicationComponent } from './edit-application/edit-application.component';

const routes: Routes = [
  {
    path: 'application',
    component: ApplicationComponent,
  },
  {
    path: 'edit-app',
    component: EditApplicationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
