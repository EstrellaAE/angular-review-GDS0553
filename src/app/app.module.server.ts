import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';



@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ButtonModule,
    
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
