import { Component, Signal, WritableSignal, computed, signal } from '@angular/core';

@Component({
  selector: 'app-contador2',
  standalone: true,
  imports: [],
  templateUrl: './contador2.component.html',
  styleUrl: './contador2.component.css'
})
export class Contador2Component {
  mensaje: WritableSignal<string> = signal('');
  numCaracteres: Signal<number> = computed(() => this.mensaje().length);

  onChange($event: any) {
    // Modificando el valor del signal de lectura escritura
    // modificamos también el signal de solo lectura
    this.mensaje.set($event.target.value)
  }
}
