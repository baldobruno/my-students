import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Studente } from '../model/studente.model';
import { StudenteService } from '../service/studente.service';

@Component({
  selector: 'app-studente-dettaglio',
  templateUrl: './studente-dettaglio.page.html',
  styleUrls: ['./studente-dettaglio.page.scss'],
})
export class StudenteDettaglioPage implements OnInit, OnDestroy {
  studente: Studente;
  private studenteSub: Subscription;

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
      this.studenteSub = this.studentiService
        .getStudenteById(paramMap.get('id'))
        .subscribe((studente) => {
          this.studente = studente;
        });
    });
  }

  removeStudente(id: string) {
    this.studentiService.removeStudenteById(id).subscribe(() => {
      this.router.navigate(['home']);
    });
  }
  ngOnDestroy(): void {
    if (this.studenteSub) {
      this.studenteSub.unsubscribe();
    }
  }
}
