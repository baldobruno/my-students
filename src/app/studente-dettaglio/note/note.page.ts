import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Studente } from 'src/app/model/studente.model';
import { StudenteService } from 'src/app/service/studente.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {
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
      this.studente = this.studentiService.getStudenteById(+paramMap.get('id'));
    });
  }
}
