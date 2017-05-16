import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Lesson } from './lesson';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class LessonsService {

  constructor(private db: AngularFireDatabase) { }

  findAllLessons():Observable<Lesson[]> {
  	return this.db.list('lessons')
    .do(console.log)
    .map(Lesson.fromJsonList);
  }

}
