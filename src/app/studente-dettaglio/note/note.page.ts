import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Studente } from 'src/app/model/studente.model';
import { StudenteService } from 'src/app/service/studente.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit, OnDestroy {
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
        this.router.navigate(['home']);
        return;
      }
      this.studenteSub = this.studentiService
        .getStudenteById(paramMap.get('id'))
        .subscribe((studente) => {
          this.studente = studente;
        });
    });
  }
  onRemoveNota(idNota: number) {
    this.studentiService.removeNotaById(this.studente.id, idNota).subscribe();
  }
  ngOnDestroy(): void {
    if (this.studenteSub) {
      this.studenteSub.unsubscribe();
    }
  }
}
