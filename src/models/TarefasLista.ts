import { Tarefa } from "./Tarefa";

export class TarefasLista {
    constructor(public usuario: string, private listaTarefas: Tarefa[] = []) {
    }
    get tarefas(): readonly Tarefa[] {
        return this.listaTarefas;
    }
    addTarefa(nomeTarefa: string, dataTarefa: string, detalheTarefa: string) {
        this.listaTarefas.push(new Tarefa(nomeTarefa, dataTarefa, detalheTarefa));
    }
}