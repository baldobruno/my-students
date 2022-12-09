import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, take, tap } from 'rxjs';
import { Genitore } from '../model/genitore.model';
import { Materia } from '../model/materia.model';
import { Nota } from '../model/nota.model';
import { Pagamento } from '../model/pagamento.model';
import { Studente } from '../model/studente.model';

interface StudenteData {
  nome: string;
  classe: string;
  indirizzo: string;
  materie: Materia[];
  pagamenti: Pagamento[];
  tariffa: string;
  note: Nota[];
  genitori: Genitore[];
}
@Injectable({
  providedIn: 'root',
})
export class StudenteService {
  private studentiArray: Studente[] = [
    {
      id: '1',
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
          id: 1,
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
      id: '2',
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
          id: 1,
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
  private _studenti = new BehaviorSubject<Studente[]>(this.studentiArray);
  constructor(private http: HttpClient) {}

  get studenti() {
    return this._studenti.asObservable();
  }
  listaStudenti() {
    // this.http
    //   .get<{ [key: string]: StudenteData }>(
    //     'https://my-students-977be-default-rtdb.europe-west1.firebasedatabase.app/studenti.json'
    //   )
    //   .pipe(
    //     map((resData) => {
    //       const studenti = [];
    //       for (const key in resData) {
    //         if (resData.hasOwnProperty(key)) {
    //           // const pagamenti=[];
    //           // if(resData[key].pagamenti){
    //           //   resData[key].pagamenti.forEach(pagamento => {
    //           //     pagamenti.push(new Pagamento(
    //           //       pagamento.id,
    //           //       pagamento.mese,
    //           //       new Date(pagamento.)
    //           //     ))
    //           //   });
    //           // }
    //           studenti.push(
    //             new Studente(
    //               key,
    //               resData[key].nome,
    //               resData[key].classe,
    //               resData[key].indirizzo,
    //               resData[key].materie,
    //               resData[key].pagamenti,
    //               resData[key].tariffa,
    //               resData[key].note,
    //               resData[key].genitori
    //             )
    //           );
    //         }
    //       }
    //       return studenti;
    //     }),
    //     tap((studenti) => {
    //       this._studenti.next(studenti);
    //     })
    //   );
    return this.studenti.pipe(
      take(1),
      tap((studenti) => this._studenti.next(studenti))
    );
  }

  getStudenteById(id: string) {
    return this.studenti.pipe(
      map((studenti) => studenti.find((studente) => studente.id === id))
    );
  }

  removeStudenteById(id: string) {
    return this.studenti.pipe(
      take(1),
      map((studenti) => {
        return studenti.filter((studente) => studente.id !== id);
      }),
      tap((studenti) => this._studenti.next(studenti))
    );
  }

  editPagamentoStudente(
    idStudente: string,
    idPagamento: number,
    mese: number,
    numeroOre: number,
    importo: number,
    metodo: string,
    nota: string
  ) {
    return this.studenti.pipe(
      take(1),
      map((studenti) => {
        const studenteDaModificareIndex = studenti.findIndex(
          (studente) => studente.id === idStudente
        );

        const oldStudente = studenti[studenteDaModificareIndex];

        const pagamentoDaModificareIndex = oldStudente.pagamenti.findIndex(
          (pagamento) => pagamento.id === idPagamento
        );

        const oldPagamento = oldStudente.pagamenti[pagamentoDaModificareIndex];

        oldStudente.pagamenti[pagamentoDaModificareIndex] = new Pagamento(
          oldPagamento.id,
          mese,
          oldPagamento.dataPagamento,
          numeroOre,
          importo,
          metodo,
          nota
        );
        studenti[studenteDaModificareIndex] = oldStudente;
        return studenti;
      }),
      tap((studenti) => this._studenti.next(studenti))
    );
  }

  removePagamentoById(idStudente: string, idPagamento: number) {
    return this.studenti.pipe(
      take(1),
      map((studenti) => {
        const studenteDaModificareIndex = studenti.findIndex(
          (studente) => studente.id === idStudente
        );

        const oldStudente = studenti[studenteDaModificareIndex];

        oldStudente.pagamenti = oldStudente.pagamenti.filter(
          (pagamento) => pagamento.id !== idPagamento
        );
        studenti[studenteDaModificareIndex] = oldStudente;
        return studenti;
      }),
      tap((studenti) => this._studenti.next(studenti))
    );
  }

  addPagamento(idStudente: string, pagamento: Pagamento) {
    return this.studenti.pipe(
      take(1),
      map((studenti) => {
        const studenteDaModificareIndex = studenti.findIndex(
          (studente) => studente.id === idStudente
        );

        const oldStudente = studenti[studenteDaModificareIndex];

        oldStudente.pagamenti.push(pagamento);
        studenti[studenteDaModificareIndex] = oldStudente;
        return studenti;
      }),
      tap((studenti) => this._studenti.next(studenti))
    );
  }
  editNotaStudente(
    idStudente: string,
    idNota: number,
    titolo: string,
    descrizione: string,
    dataCreazione: Date
  ) {
    return this.studenti.pipe(
      take(1),
      map((studenti) => {
        const studenteDaModificareIndex = studenti.findIndex(
          (studente) => studente.id === idStudente
        );

        const oldStudente = studenti[studenteDaModificareIndex];

        const notaDaModificareIndex = oldStudente.note.findIndex(
          (nota) => nota.id === idNota
        );

        const oldNota = oldStudente.note[notaDaModificareIndex];

        oldStudente.note[notaDaModificareIndex] = new Nota(
          oldNota.id,
          titolo,
          descrizione,
          dataCreazione
        );

        studenti[studenteDaModificareIndex] = oldStudente;
        return studenti;
      }),
      tap((studenti) => this._studenti.next(studenti))
    );
  }

  removeNotaById(idStudente: string, idNota: number) {
    return this.studenti.pipe(
      take(1),
      map((studenti) => {
        const studenteDaModificareIndex = studenti.findIndex(
          (studente) => studente.id === idStudente
        );

        const oldStudente = studenti[studenteDaModificareIndex];

        oldStudente.note = oldStudente.note.filter(
          (nota) => nota.id !== idNota
        );
        studenti[studenteDaModificareIndex] = oldStudente;
        return studenti;
      }),
      tap((studenti) => this._studenti.next(studenti))
    );
  }

  addNota(idStudente: string, nota: Nota) {
    return this.studenti.pipe(
      take(1),
      map((studenti) => {
        const studenteDaModificareIndex = studenti.findIndex(
          (studente) => studente.id === idStudente
        );

        const oldStudente = studenti[studenteDaModificareIndex];

        oldStudente.note.push(nota);
        studenti[studenteDaModificareIndex] = oldStudente;
        return studenti;
      }),
      tap((studenti) => this._studenti.next(studenti))
    );
  }
  addStudente(studente: Studente) {}
}
