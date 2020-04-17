import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss'],
})
export class IngredientComponent implements OnInit {
  @Input() name: string;

  constructor() {}

  ngOnInit(): void {}
}
