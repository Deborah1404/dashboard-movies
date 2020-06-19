import { GendersService } from './../../../services/genders.service';
import { Gender } from './../../../models/gender.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-genderslist',
  templateUrl: './genderslist.component.html',
  styleUrls: ['./genderslist.component.scss']
})
export class GenderslistComponent implements OnInit {
  genders: Gender[] = [];

  constructor(private gendersService: GendersService) { }
  ngOnInit(): void {
    this.gendersService.getGenders() // renvoie un observable de genders, il faut donc souscrire
    .subscribe(
      (data: Gender[]) => this.genders = data
    );
  }
  delete(id){
    this.gendersService.delete(id).subscribe();
      this.genders = this.genders.filter(element => element.id !== id);
    }

}
