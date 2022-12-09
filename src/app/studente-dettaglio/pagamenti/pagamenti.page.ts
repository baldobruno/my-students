import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Studente } from 'src/app/model/studente.model';
import { StudenteService } from 'src/app/service/studente.service';

@Component({
  selector: 'app-pagamenti',
  templateUrl: './pagamenti.page.html',
  styleUrls: ['./pagamenti.page.scss'],
})
export class PagamentiPage implements OnInit {
  studente: Studente;

  constructor(
    private studentiService: StudenteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('id')) {
        this.router.navigate(['home']);
        return;
      }
      this.studentiService
        .getStudenteById(paramMap.get('id'))
        .subscribe((studente) => {
          this.studente = studente;
        });
    });
  }

  onDeletePagamento(idPagamento: number) {
    this.studentiService
      .removePagamentoById(this.studente.id, idPagamento)
      .subscribe();
  }
}
