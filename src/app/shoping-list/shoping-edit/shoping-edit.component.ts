import {Component, ElementRef, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';
import {IngredientModel} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styles: []
})
export class ShopingEditComponent implements OnInit {

  @Output() ingredientAdded = new EventEmitter<IngredientModel>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddItem(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    const newIngredient = new IngredientModel(nameInput.value,Number(amountInput.value));
    this.ingredientAdded.emit(newIngredient);
  }


}
