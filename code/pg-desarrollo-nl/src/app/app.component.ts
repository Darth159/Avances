import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'pg-desarrollo-nl';

  ngAfterViewInit() {
    const submenuToggle = document.getElementById('submenu-toggle');
    const submenu = document.querySelector('.submenu') as HTMLElement;

    if (submenuToggle && submenu) {
      submenuToggle.addEventListener('click', (e: Event) => {
        e.preventDefault();
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
      });
    }
  }
}

