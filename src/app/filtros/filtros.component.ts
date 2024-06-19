import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-filtros',
  standalone: true,
  imports: [],
  templateUrl: './filtros.component.html',
  styleUrl: './filtros.component.css'
})
export class FiltrosComponent {
  meses: string[] = [
    'Agosto', 'Septiembre', 'Octubre', 'Noviembre',
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'
  ];
  @Output() seleccionMes = new EventEmitter<string>();

    seleccionarMes(mes: any) {
    this.seleccionMes.emit(mes);
  }
}
