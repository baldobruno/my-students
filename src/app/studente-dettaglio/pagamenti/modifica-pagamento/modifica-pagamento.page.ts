import { formatDate } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pagamento } from 'src/app/model/pagamento.model';
import { Studente } from 'src/app/model/studente.model';
import { StudenteService } from 'src/app/service/studente.service';

@Component({
  selector: 'app-modifica-pagamento',
  templateUrl: './modifica-pagamento.page.html',
  styleUrls: ['./modifica-pagamento.page.scss'],
})
export class ModificaPagamentoPage implements OnInit, OnDestroy {
  studente: Studente;
  private studenteSub: Subscription;
  pagamento: Pagamento;
  form: FormGroup;
  constructor(
    private studenteService: StudenteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('id') || !paramMap.has('idPagamento')) {
        return;
      }
      this.studenteSub = this.studenteService
        .getStudenteById(paramMap.get('id'))
        .subscribe((studente) => {
          this.studente = studente;
          this.pagamento = this.studente.pagamenti.find(
            (pagamento) => pagamento.id === +paramMap.get('idPagamento')
          );

          if (this.pagamento) {
            this.form = new FormGroup({
              mese: new FormControl(this.pagamento.mese, {
                updateOn: 'blur',
                validators: [
                  Validators.required,
                  Validators.min(1),
                  Validators.max(12),
                ],
              }),
              dataPagamento: new FormControl(
                {
                  value: formatDate(
                    this.pagamento.dataPagamento,
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
              numeroOre: new FormControl(this.pagamento.numeroOre, {
                updateOn: 'blur',
                validators: [Validators.required, Validators.min(0)],
              }),
              importo: new FormControl(this.pagamento.importo, {
                updateOn: 'blur',
                validators: [Validators.required, Validators.min(0)],
              }),
              metodo: new FormControl(this.pagamento.metodo, {
                updateOn: 'blur',
                validators: [Validators.required],
              }),
              nota: new FormControl(this.pagamento.nota, {
                updateOn: 'blur',
                validators: [Validators.required],
              }),
            });
          }
        });
    });
  }

  onUpdatePagamento() {
    if (!this.form.valid) {
      return;
    }
    this.studenteService
      .editPagamentoStudente(
        this.studente.id,
        this.pagamento.id,
        this.form.value.mese,
        this.form.value.numeroOre,
        this.form.value.importo,
        this.form.value.metodo,
        this.form.value.nota
      )
      .subscribe(() =>
        this.router.navigate([
          'studente-dettaglio',
          this.studente.id,
          'pagamenti',
        ])
      );
  }

  ngOnDestroy(): void {
    if (this.studenteSub) {
      this.studenteSub.unsubscribe();
    }
  }
}
