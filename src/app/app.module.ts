import { PesquisaAlunoModule } from './pesquisa-aluno/pesquisa-aluno.module';
import { CadastroAlunoModule } from './cadastro-aluno/cadastro-aluno.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CadastroAlunoModule,
    PesquisaAlunoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
