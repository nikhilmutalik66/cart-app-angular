import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cart-app-angular';

  loadedFeature:string = 'recipe';

  onNevigage(feature: string) {
    this.loadedFeature = feature;
  }
}
