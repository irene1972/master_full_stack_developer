import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import CryptoJS from "crypto-js";
import { Datos } from '../../services/datos';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  miForm: FormGroup;
  mensaje: string = '';
  tipo: boolean = false;
  claveSecreta: string = "mi_clave_super_secreta";
  password: string = '';

  constructor(private cd: ChangeDetectorRef, private router: Router, private route: ActivatedRoute, private datos: Datos) {
    this.miForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ])
    }, []);
  }

  get email() {
    return this.miForm.get('email');
  }

  get username() {
    return this.miForm.get('username');
  }

  cargarDatos() {
    if (!this.miForm.valid) {
      this.miForm.markAllAsTouched();
      return;
    }
    console.log(this.miForm.value);

    const usuario = this.miForm.value.username;
    const email = this.miForm.value.email;

    const password = this.datos.generarPassword(usuario, email).subscribe((password) => {
      console.log(password);
      this.password = password;
      const descifrado = this.datos.descifrar(password);
      console.log(descifrado);
    });


  }

}
