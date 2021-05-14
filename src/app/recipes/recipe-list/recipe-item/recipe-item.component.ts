import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import {RecipeModel} from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styles: []
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe:RecipeModel;

  @Output() selectedRecipe = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelectRecipe() {
    this.selectedRecipe.emit();
  }
}
