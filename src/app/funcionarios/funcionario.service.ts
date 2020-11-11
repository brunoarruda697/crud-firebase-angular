import { Funcionario } from './funcionario';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private angularFireDatabase: AngularFireDatabase) { }

  insert(funcionario: Funcionario) {
    this.angularFireDatabase.list('funcionarios').push(funcionario)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  update(funcionario: Funcionario, key: string) {
    this.angularFireDatabase.list('funcionarios').update(key, funcionario);
  }

  getAll() {
    return this.angularFireDatabase.list('funcionarios')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(data => ({ key: data.payload.key, ...data.payload.val() as {} }));
        })
      );
  }

  delete(key: string) {
    this.angularFireDatabase.object(`funcionarios/${key}`).remove();
  }
}
