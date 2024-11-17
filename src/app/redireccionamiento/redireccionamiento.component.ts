import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-redireccionamiento',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './redireccionamiento.component.html',
  styleUrls: ['./redireccionamiento.component.css']
})
export class RedireccionamientoComponent {

  @Output() onRedirect = new EventEmitter<void>();

  navigateToSidebar() {
    this.onRedirect.emit(); // Emite el evento para ocultar la vista de redireccionamiento
  }
}
