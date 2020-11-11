import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../funcionario';
import { FuncionarioDataService } from './../funcionario-data.service';
import { FuncionarioService } from './../funcionario.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  funcionarios: Observable<any>;

  constructor(
    private funcionarioService: FuncionarioService,
    private funcionarioDataService: FuncionarioDataService
  ) { }

  ngOnInit() {
    this.funcionarios = this.funcionarioService.getAll();
  }

  delete(key: string) {
    this.funcionarioService.delete(key);
  }

  edit(funcionario: Funcionario, key: string) {
    this.funcionarioDataService.obtemFuncionario(funcionario, key);
  }
}
