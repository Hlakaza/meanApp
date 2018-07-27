import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { ApiService } from './services/api.service';

import { AppComponent } from './app.component';
import { MessagesComponent } from './components/messages/messages.component';
import { RegisterComponent } from './components/register/register.component';


const routes = [
   { path: 'register', component: RegisterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MatButtonModule,
    NoopAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
