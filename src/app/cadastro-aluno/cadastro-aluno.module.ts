import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { TabViewModule } from 'primeng/components/tabview/tabview';
import { ToolbarModule } from 'primeng/components/toolbar/toolbar';
import { ButtonModule } from 'primeng/components/button/button';
import { PanelModule } from 'primeng/components/panel/panel';
import { CardModule } from 'primeng/components//card/card';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToolbarModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    RouterModule

  ],
  declarations: [CadastroAlunoComponent],
  exports: [CadastroAlunoComponent]
})
export class CadastroAlunoModule { }
