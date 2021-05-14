import {Component, OnInit, Output,EventEmitter} from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeModel[] = [
    new RecipeModel('Test Reipe', 'This is Very Testy',
      'https://media.istockphoto.com/photos/' +
      'wooden-blocks-with-menu-words-on-plate-picture-id1216505247'),
    new RecipeModel('New Test Reipe', 'This is Very Testy...!',
      'https://media.istockphoto.com/photos/' +
      'wooden-blocks-with-menu-words-on-plate-picture-id1216505247')
  ];

  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onRecipeSelected(recipeIs : RecipeModel) {
    this.recipeWasSelected.emit(recipeIs);
  }
}
