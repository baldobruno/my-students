import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Studente } from '../model/studente.model';
import { StudenteService } from '../service/studente.service';

@Component({
  selector: 'app-studente-dettaglio',
  templateUrl: './studente-dettaglio.page.html',
  styleUrls: ['./studente-dettaglio.page.scss'],
})
export class StudenteDettaglioPage implements OnInit {
  studente: Studente;

  constructor(
    private studentiService: StudenteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('id')) {
        return;
      }
      this.studente = this.studentiService.getStudenteById(+paramMap.get('id'));
    });
  }

  removeStudente(id: number) {
    this.studentiService.removeStudenteById(id);
    this.router.navigate(['home']);
  }
}
