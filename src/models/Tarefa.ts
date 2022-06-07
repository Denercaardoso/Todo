export class Tarefa {
    constructor(nomeTarefaVal: string, dataTarefaVal: string, detalheTarefaVal: string, completaVal: boolean = false) {
        this.nomeTarefa = nomeTarefaVal;
        this.completo = completaVal;
        this.dataTarefa = dataTarefaVal;
        this.detalheTarefa = detalheTarefaVal;
    }
    nomeTarefa: string;
    dataTarefa: string;
    detalheTarefa: string;
    completo: boolean;
}