import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../core/model';
import { CadastroAlunoService } from '../cadastro-aluno.service';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {

  aluno = new Aluno();

  constructor(
    private cadastroAlunoService : CadastroAlunoService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title

  ) { }



  ngOnInit() {

    const codigoAluno = this.route.snapshot.params['codigo'];

    if (codigoAluno) {
      this.carregarAluno(codigoAluno);
    }
  }

  get editando() {
    return Boolean(this.aluno.id)
  }

  carregarAluno(codigo: number) {
    this.cadastroAlunoService.buscarPorCodigo(codigo)
      .then(aluno => {
        this.aluno = aluno;
      });
  }

  salvar(form: FormControl) {

    if (this.editando) {
      this.cadastroAlunoService.atualizar(this.aluno);
      form.reset();
      this.toasty.success('Aluno atualizado com sucesso!');
    } else {

      this.cadastroAlunoService.adicionar(this.aluno);
      form.reset();

      this.toasty.success('Aluno adicionado com sucesso!');

    }

  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de lançamento: ${this.aluno.nome}`);
  }

}
