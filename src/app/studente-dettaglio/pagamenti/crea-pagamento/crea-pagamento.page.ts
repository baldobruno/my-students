import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pagamento } from 'src/app/model/pagamento.model';
import { StudenteService } from 'src/app/service/studente.service';

@Component({
  selector: 'app-crea-pagamento',
  templateUrl: './crea-pagamento.page.html',
  styleUrls: ['./crea-pagamento.page.scss'],
})
export class CreaPagamentoPage implements OnInit {
  idStudente: string;
  form: FormGroup;
  constructor(
    private studenteService: StudenteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('id')) {
        return;
      }
      this.idStudente = paramMap.get('id');
      this.form = new FormGroup({
        mese: new FormControl(1, {
          updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.min(1),
            Validators.max(12),
          ],
        }),
        dataPagamento: new FormControl(new Date().toISOString(), {
          updateOn: 'blur',
          validators: [Validators.required],
        }),
        numeroOre: new FormControl(0, {
          updateOn: 'blur',
          validators: [Validators.required, Validators.min(0)],
        }),
        importo: new FormControl(0, {
          updateOn: 'blur',
          validators: [Validators.required, Validators.min(0)],
        }),
        metodo: new FormControl('', {
          updateOn: 'blur',
          validators: [Validators.required],
        }),
        nota: new FormControl('', {
          updateOn: 'blur',
        }),
      });
    });
  }

  onCreatePagamento() {
    if (!this.form.valid) {
      return;
    }

    this.studenteService
      .addPagamento(
        this.idStudente,
        new Pagamento(
          Math.random(),
          this.form.value.mese,
          new Date(this.form.value.dataPagamento),
          this.form.value.numeroOre,
          this.form.value.importo,
          this.form.value.metodo,
          this.form.value.nota
        )
      )
      .subscribe(() =>
        this.router.navigate([
          'studente-dettaglio',
          this.idStudente,
          'pagamenti',
        ])
      );
  }
}
