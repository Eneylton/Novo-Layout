import { CoreModule } from './core/core.module';
import { PesquisaAlunoModule } from './pesquisa-aluno/pesquisa-aluno.module';
import { CadastroAlunoModule } from './cadastro-aluno/cadastro-aluno.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CadastroAlunoModule,
    PesquisaAlunoModule,
    CoreModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
