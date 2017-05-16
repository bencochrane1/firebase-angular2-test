import { Component } from '@angular/core';
import { initializeApp, database } from 'firebase';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  courses$:FirebaseListObservable<any>;
  lesson$:FirebaseObjectObservable<any>;
  firstCourse:any;

  constructor(private db: AngularFireDatabase) {

  	this.courses$ = db.list('courses');
  	this.courses$.subscribe(console.log);

  	this.lesson$ = db.object('lessons/-Kk9MmhDvu8RRs67VS7P');
  	this.lesson$.subscribe(console.log);

  	this.courses$.map(courses => courses[1])
  	.subscribe(
  		course => this.firstCourse = course
  	)

  }

  listPush() {
  	this.courses$.push({ stuff: 'TEST NEW' })
  	.then((res) => console.log('list push done',res))
  	.catch((err) => console.error(err));
  }

  listRemove() {
  	this.courses$.remove(this.firstCourse)
  	.then((res) => console.log('success'))
  }

  listUpdate() {
  	this.courses$.update(this.firstCourse, { description: 'new test' })
  	.then((res) => console.log('update success'))
  }

  objectUpdate() {
  	this.lesson$.update({ description: 'NEW TESTER' })
  	.then((res) => console.log('updated object'))
  }

  objectSet() {
  	this.lesson$.set({ description: 'SET TESTER' })
  	.then((res) => console.log('updated object SET'))
  }  

  objectRemove() {
  	this.lesson$.remove()
  	.then((res) => console.log('REMOVED object'))
  }    
}
