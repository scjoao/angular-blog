import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { datafake } from '../../.data/datafake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  private id: string | null = "0";

  contentPhoto: string = "";
  contentTitle: string = "";
  contentDescription: string = "";

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(): void{
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null){
    const result = datafake.filter(article => article.id == id)[0]
    this.contentPhoto = result.photo;
    this.contentTitle = result.title;
    this.contentDescription = result.description;
  }
}
