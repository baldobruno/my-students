import { formatDate } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Nota } from 'src/app/model/nota.model';
import { Studente } from 'src/app/model/studente.model';
import { StudenteService } from 'src/app/service/studente.service';

@Component({
  selector: 'app-modifica-nota',
  templateUrl: './modifica-nota.page.html',
  styleUrls: ['./modifica-nota.page.scss'],
})
export class ModificaNotaPage implements OnInit, OnDestroy {
  studente: Studente;
  private studenteSub: Subscription;
  nota: Nota;
  form: FormGroup;
  constructor(
    private studenteService: StudenteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('id') || !paramMap.has('idNota')) {
        return;
      }
      this.studenteSub = this.studenteService
        .getStudenteById(paramMap.get('id'))
        .subscribe((studente) => {
          this.studente = studente;
          this.nota = this.studente.note.find(
            (nota) => nota.id === +paramMap.get('idNota')
          );

          if (this.nota) {
            this.form = new FormGroup({
              titolo: new FormControl(this.nota.titolo, {
                updateOn: 'blur',
                validators: [Validators.required],
              }),
              descrizione: new FormControl(this.nota.descrizione, {
                updateOn: 'blur',
                validators: [Validators.required],
              }),
              dataCreazione: new FormControl(
                {
                  value: formatDate(
                    this.nota.dataCreazione,
                    'dd/MM/yyyy',
                    'it'
                  ),
                  disabled: true,
                },
                {
                  updateOn: 'blur',
                  validators: [Validators.required],
                }
              ),
            });
          }
        });
    });
  }

  onUpdateNota() {
    if (!this.form.valid) {
      return;
    }

    this.studenteService
      .editNotaStudente(
        this.studente.id,
        this.nota.id,
        this.form.value.titolo,
        this.form.value.descrizione,
        this.nota.dataCreazione
      )
      .subscribe(() =>
        this.router.navigate(['studente-dettaglio', this.studente.id, 'note'])
      );
  }
  ngOnDestroy(): void {
    if (this.studenteSub) {
      this.studenteSub.unsubscribe();
    }
  }
}
