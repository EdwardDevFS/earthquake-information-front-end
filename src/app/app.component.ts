import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageSliderComponent } from './shared/components/image-slider/image-slider.component';
import { FeaturesComponent } from './pages/features/features.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageSliderComponent, FeaturesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent implements OnInit {
  
  constructor() {}

  ngOnInit(): void {
    
    // console.log(this.featuresList);
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
