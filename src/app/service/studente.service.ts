import { Injectable } from '@angular/core';
import { Studente } from '../model/studente.model';

@Injectable({
  providedIn: 'root',
})
export class StudenteService {
  private studenti: Studente[] = [
    {
      id: 1,
      nome: 'Baldo Bruno',
      classe: 'Terza media',
      indirizzo: 'Via Roma',
      materie: [
        {
          id: 1,
          descrizione: 'Fisica',
          libro: 'Mazzoldi',
        },
        {
          id: 2,
          descrizione: 'Chimica',
          libro: 'Silvestroni',
        },
      ],
      pagamenti: [
        {
          id: 1,
          mese: 3,
          dataPagamento: new Date(2022, 3, 26),
          numeroOre: 4,
          importo: 70,
          metodo: 'Postepay',
          nota: 'Questa è una nota per il pagamento con id = 1',
        },
        {
          id: 2,
          mese: 4,
          dataPagamento: new Date(2022, 4, 27),
          numeroOre: 3,
          importo: 60,
          metodo: 'Postepay',
          nota: 'Questa è una nota per il pagamento con id = 2',
        },
      ],
      tariffa: '20 €/ora',
      note: [
        {
          titolo: 'La nota per lo studente Baldo Bruno',
          descrizione: 'Baldo Bruno non si applica abbastanza',
          dataCreazione: new Date(2021, 2, 1),
        },
      ],
      genitori: [
        {
          id: 1,
          nome: 'Lillo',
          cognome: 'Bruno',
          telefono: '0925-84672',
        },
        {
          id: 2,
          nome: 'Genitore',
          cognome: '2',
          telefono: '0925-83395',
        },
      ],
    },
    {
      id: 2,
      nome: 'Oriana Vittorino',
      classe: 'Terzo anno Università',
      indirizzo: 'Via Carlentini',
      materie: [
        {
          id: 1,
          descrizione: 'Fisica',
          libro: 'Mondadori',
        },
        {
          id: 2,
          descrizione: 'Chimica',
          libro: 'Zanichelli',
        },
      ],
      pagamenti: [
        {
          id: 3,
          mese: 3,
          dataPagamento: new Date(2022, 3, 26),
          numeroOre: 5,
          importo: 125,
          metodo: 'Bonifico bancario',
          nota: 'Questa è una nota per il pagamento con id = 3',
        },
        {
          id: 4,
          mese: 5,
          dataPagamento: new Date(2022, 4, 27),
          numeroOre: 5,
          importo: 125,
          metodo: 'Paypal',
          nota: 'Questa è una nota per il pagamento con id = 4',
        },
      ],
      tariffa: '25 €/ora',
      note: [
        {
          titolo: 'La nota per lo studente Oriana Vittorino',
          descrizione: 'Oriana Vittorino si applica',
          dataCreazione: new Date(2021, 3, 1),
        },
      ],
      genitori: [
        {
          id: 1,
          nome: 'Enzo',
          cognome: 'Vittorino',
          telefono: '0925-558798',
        },
        {
          id: 2,
          nome: 'Angela',
          cognome: 'Nastasi',
          telefono: '0925-25488',
        },
      ],
    },
  ];

  constructor() {}

  public listaStudenti(): Studente[] {
    return this.studenti;
  }

  public getStudenteById(id: number): Studente {
    return this.studenti.find((studente) => studente.id == id);
  }

  public removeStudenteById(id: number) {
    this.studenti=this.studenti.filter(studente=>studente.id!==id);
  }
}
