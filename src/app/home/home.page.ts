import { Component, OnInit } from '@angular/core';
import { Studente } from '../model/studente.model';
import { StudenteService } from '../service/studente.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  studenti: Studente[] = [];

  constructor(private studentiService: StudenteService) {}
  ngOnInit() {
    this.studenti = this.studentiService.listaStudenti();
  }
}
