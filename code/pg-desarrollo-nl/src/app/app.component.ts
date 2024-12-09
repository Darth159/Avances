import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'pg-desarrollo-nl';

  ngAfterViewInit() {
    const submenuToggleDesarrolladores = document.getElementById('submenu-toggle-desarrolladores');
    const submenuDesarrolladores = document.getElementById('submenu-desarrolladores') as HTMLElement;

    if (submenuToggleDesarrolladores && submenuDesarrolladores) {
      submenuToggleDesarrolladores.addEventListener('click', (e: Event) => {
        e.preventDefault();
        submenuDesarrolladores.style.display =
          submenuDesarrolladores.style.display === 'block' ? 'none' : 'block';
      });
    }

    const submenuToggleServicios = document.getElementById('submenu-toggle-servicios');
    const submenuServicios = document.getElementById('submenu-servicios') as HTMLElement;

    if (submenuToggleServicios && submenuServicios) {
      submenuToggleServicios.addEventListener('click', (e: Event) => {
        e.preventDefault();
        submenuServicios.style.display =
          submenuServicios.style.display === 'block' ? 'none' : 'block';
      });
    }
  }
}
