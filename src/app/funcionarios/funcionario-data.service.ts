import { Funcionario } from './funcionario';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioDataService {

  constructor() { }

  private funcionarioSource = new BehaviorSubject({ funcionario: null, key: '' });
  funcionarioAtual = this.funcionarioSource.asObservable();
  //asObservable é um objeto async, ele não prende a execução e não tem retorno no momento.

  obtemFuncionario(funcionario: Funcionario, key: string) {
    this.funcionarioSource.next({funcionario, key});
  }
}
