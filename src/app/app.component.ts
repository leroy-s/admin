import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { RedireccionamientoComponent } from "./redireccionamiento/redireccionamiento.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, FormsModule, RedireccionamientoComponent, CommonModule ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-clovalpy';
  isRedirected = false; // Controla si mostrar el sidebar o la vista de redireccionamiento

  // Método para cambiar el estado a redireccionado
  redirectToSidebar() {
    this.isRedirected = true;
  }
}
