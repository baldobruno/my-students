import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Nota } from 'src/app/model/nota.model';
import { StudenteService } from 'src/app/service/studente.service';

@Component({
  selector: 'app-crea-nota',
  templateUrl: './crea-nota.page.html',
  styleUrls: ['./crea-nota.page.scss'],
})
export class CreaNotaPage implements OnInit {
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
        titolo: new FormControl('', {
          updateOn: 'blur',
          validators: [Validators.required],
        }),
        descrizione: new FormControl('', {
          updateOn: 'blur',
          validators: [Validators.required],
        }),
      });
    });
  }

  onCreateNota() {
    if (!this.form.valid) {
      return;
    }

    this.studenteService
      .addNota(
        this.idStudente,
        new Nota(
          Math.random(),
          this.form.value.titolo,
          this.form.value.descrizione,
          new Date()
        )
      )
      .subscribe(() =>
        this.router.navigate(['studente-dettaglio', this.idStudente, 'note'])
      );
  }
}
