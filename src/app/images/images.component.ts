import { Component } from '@angular/core';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [],
  templateUrl: './images.component.html',
  styleUrl: './images.component.css'
})
export class ImagesComponent {
  images: string[] = [];

  ngOnInit() {
    this.images = this.generateImageArray();
  }

  generateImageArray(): string[] {
    const imageArray = [];
    for (let i = 1; i <= 72; i++) {
      // Aquí puedes ajustar la ruta de las imágenes según tu estructura
            imageArray.push(`assets/images/image${i}.jpeg`);
            
         }
    return imageArray;
  }
}
