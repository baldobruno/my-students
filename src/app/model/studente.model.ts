import { Pagamento } from "./pagamento.model";
import { Genitore } from "./genitore.model";
import { Materia } from "./materia.model";
import { Nota } from "./nota.model";

export class Studente {

  constructor(
    public id:string,
    public nome:string,
    public classe:string,
    public indirizzo:string,
    public materie:Materia[],
    public pagamenti:Pagamento[],
    public tariffa:string,
    public note:Nota[],
    public genitori:Genitore[]
    ){};
    
}
