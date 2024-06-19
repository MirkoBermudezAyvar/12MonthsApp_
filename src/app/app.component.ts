import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ImagesComponent } from './images/images.component';
import { FiltrosComponent } from './filtros/filtros.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ImagesComponent,FiltrosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '12monthsApp';

  items: any[] = [ /* Aquí van tus datos */ ];
  itemsFiltrados: any[] = [];

  filtrarPorMes(mes: string) {
    if (!mes) {
      this.itemsFiltrados = [...this.items]; // Mostrar todos si no se selecciona un mes
    } else {
      this.itemsFiltrados = this.items.filter(item => {
        // Implementa la lógica para filtrar según el mes
        // Por ejemplo, si tus datos tienen una propiedad 'fecha' puedes hacer:
        // return new Date(item.fecha).getMonth() === this.meses.indexOf(mes);
        // Ajusta esta lógica según la estructura de tus datos
        return true; // Suponiendo que siempre se muestran todos los elementos
      });
    }
  }
}
