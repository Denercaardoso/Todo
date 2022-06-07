import { Component } from '@angular/core';
import { Tarefa } from 'src/models/Tarefa';
import { TarefasLista } from 'src/models/TarefasLista';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  private list = new TarefasLista("Senac", [
    new Tarefa("Estudar HTML", "24/02/2002", "Div"),
    new Tarefa("Estudar CSS", "24/06/2002", "flex box"),
    new Tarefa("Estudar JAVASCRIPT", "26/06/2022", "arrow function"),
  ]);
  get username(): string {
    return this.list.usuario;
  }

  get itemCount(): number {
    return this.list.tarefas.filter(item => !item.completo).length;
  }

  get items(): readonly Tarefa[] {
    return this.list.tarefas.filter(item => this.showComplete || !item.completo);
  }

  addTarefa(newItem: string, newItem2: string, newitem3: string) {
    if (newItem != " ") {
      this.list.addTarefa(newItem, newItem2, newitem3);
    }
    else if (newItem2 != " ") {
      this.list.addTarefa(newItem, newItem2, newitem3);
    }
    else if (newitem3 != " ") {
      this.list.addTarefa(newItem, newItem2, newitem3);
    }
  }
  showComplete: boolean = false;
}

