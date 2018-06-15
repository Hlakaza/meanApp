import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatCardModule } from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { ApiService } from './services/api.service';

import { AppComponent } from './app.component';
import { MessagesComponent } from './components/messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatButtonModule,
    NoopAnimationsModule,
    MatCardModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
