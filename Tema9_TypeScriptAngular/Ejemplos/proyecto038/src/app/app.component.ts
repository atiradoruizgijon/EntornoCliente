import { AfterViewInit, Component } from '@angular/core';

// no reconoce el objecto bootstrap, dandonos error, asi que para que typescript
// sepa que va a tener un valor más tarde:
declare var bootstrap:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'proyecto038';

  ngAfterViewInit(): void {
    // El siguiente código sirve para usar los popover de Bootstrap
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    [...popoverTriggerList].map(el => new bootstrap.Popover(el));
  }

  aceptar() {
    alert("Ha pulsado Aceptar!");
  }

  cancelar() {
    alert("Ha pulsado Cancelar!");
  }
}
