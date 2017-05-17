import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { AppComponent } from './app.component';
import { firebaseConfig } from '../environments/firebase.config';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import {LessonsService} from "./shared/model/lessons.service";

import { RouterModule } from "@angular/router";
import { routerConfig } from "./router.config"

import * as firebase from 'firebase/app';
import { HomeComponent } from './home/home.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { TopMenuComponent } from './top-menu/top-menu.component';

@NgModule({
  declarations: [ 
    AppComponent, 
    HomeComponent, LessonsListComponent, TopMenuComponent 
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [
    LessonsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
