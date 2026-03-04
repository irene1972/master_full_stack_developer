import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import CryptoJS from "crypto-js";

@Injectable({
  providedIn: 'root',
})
export class Datos {
  private claveSecreta: string = "mi_clave_super_secreta";

  generarPassword(username: string, email: string): Observable<string> {
    const texto = username + ' - ' + email;
    const cifrado = CryptoJS.AES.encrypt(texto, this.claveSecreta).toString();
    
    return of(cifrado);
  }

  descifrar(password: string): string {
    const bytes = CryptoJS.AES.decrypt(password, this.claveSecreta);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}
