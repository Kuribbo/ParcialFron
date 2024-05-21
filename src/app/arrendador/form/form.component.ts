import { Component, Input, OnInit } from '@angular/core';
import { Celular } from '../../model/celular';
import { CelularService } from '../../services/celular-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-celular',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormCelularComponent implements OnInit {
  @Input()
  celular!: Celular;

  mensajeExito: string = '';
  mensajeError: string = '';

  constructor(private celularService: CelularService, private router: Router) { }

  ngOnInit(): void {
    if (!this.celular) {
      this.celular = new Celular(0, '', '', new Date(), 0, 0, '', '');
    }
  }

  crearCelular() {
    console.log('Crear Celular', this.celular);
    this.celularService.crearCelular(this.celular).subscribe(
      celular => {
        console.log('Celular creado', celular);
        this.celular = new Celular(0, '', '', new Date(), 0, 0, '', '');
        this.router.navigate(['/celular/list']);
      },
      error => {
        this.mensajeError = 'Error al crear el celular.';
        console.error('Error al crear el celular:', error);
      }
    );
  }

  updateCelular() {
    console.log('Celular a actualizar', this.celular);
    this.celularService.actualizarCelular(this.celular).subscribe(
      response => {
        this.mensajeExito = 'Celular actualizado correctamente.';
        this.router.navigate(['/celular/list']);
      },
      error => {
        this.mensajeError = 'Error al actualizar el celular.';
        console.error('Error al actualizar el celular:', error);
      }
    );
  }
}
