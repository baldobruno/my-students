import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Studente } from '../model/studente.model';
import { StudenteService } from '../service/studente.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  studenti: Studente[] = [];
  private studentiSub: Subscription;

  constructor(private studentiService: StudenteService) {}
  ngOnInit() {
    this.studentiSub = this.studentiService.studenti.subscribe((studenti) => {
      this.studenti = studenti;
    });
  }
  ionViewWillEnter() {
    this.studentiService.listaStudenti().subscribe();
  }
  ngOnDestroy(): void {
    if (this.studentiSub) {
      this.studentiSub.unsubscribe();
    }
  }
}
