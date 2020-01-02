import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SliderPuzzleComponent } from './app/slider-puzzle/slider-puzzle.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderPuzzleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
