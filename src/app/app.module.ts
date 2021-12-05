import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoRowComponent } from './info-row/info-row.component';
import { ApplicationComponent } from './application/application.component';
import { EditApplicationComponent } from './edit-application/edit-application.component';
import { InfoButtonComponent } from './info-button/info-button.component';
import { HostDirective } from './host.directive';
import { MoveToAnotherHostComponent } from './move-to-another-host/move-to-another-host.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoRowComponent,
    ApplicationComponent,
    EditApplicationComponent,
    InfoButtonComponent,
    HostDirective,
    MoveToAnotherHostComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
