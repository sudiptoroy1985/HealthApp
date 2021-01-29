import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}


/*
const firebaseConfig = {
  apiKey: "AIzaSyCp7e8uVnFLyCt6X_suDOblbx7k8QTn-RI",
  authDomain: "fitness-app-5e741.firebaseapp.com",
  databaseURL: "https://fitness-app-5e741-default-rtdb.firebaseio.com",
  projectId: "fitness-app-5e741",
  storageBucket: "fitness-app-5e741.appspot.com",
  messagingSenderId: "813464395251",
  appId: "1:813464395251:web:d6ff7ccb4a643529ec8686",
  measurementId: "G-KR0MP8T2T2"
};
*/
