import { ActorsService } from './../../../services/actors.service';
import { Actor } from './../../../models/actor.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-actorslist',
  templateUrl: './actorslist.component.html',
  styleUrls: ['./actorslist.component.scss']
})
export class ActorslistComponent implements OnInit {

  actors: Actor[] = [];
 

  constructor(private actorsService: ActorsService) { }
  ngOnInit(): void {
    this.actorsService.getActors() // renvoie un observable de actors, il faut donc souscrire
    .subscribe(
      (data: Actor[]) => this.actors = data
    );
    
    
  }
    delete(id){
      this.actorsService.delete(id).subscribe();
        this.actors = this.actors.filter(element => element.id !== id);
      }

}
