import {Component, inject, OnInit, Signal, signal, WritableSignal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '@modules/auth/services/auth-service';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop'; // <-- El traductor

@Component({
  selector: 'app-login-page-component',
  standalone:true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login-page-component.html',
  styleUrl: './login-page-component.css',
})

export class LoginPageComponent
{

  private authService = inject(AuthService);
  private cookie = inject(CookieService);
  private router = inject(Router);

  formLogin!: FormGroup;
  textosig!: Signal<string>;

  constructor()
  {
    // 3. Instanciamos el formulario con sus validaciones
    this.formLogin = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)
      ])
    });

    // 4. Creamos la señal vinculada al control de email
    this.textosig = toSignal(
      this.formLogin.get('email')!.valueChanges,
      { initialValue: "" }
    );
  }

  sendLogin(): void
  {
    // 1. Extraemos los valores del formulario
    const { email, password } = this.formLogin.value;

    // 2. Llamamos al servicio con la nueva sintaxis de suscripción
    this.authService.sendCredentials(email, password).subscribe(
      {
          next: (responseOk) => {
            // Este bloque se ejecuta cuando las credenciales son correctas

            console.log('Login exitoso:', responseOk);

            const { tokenSession , data } = responseOk;

            const dias:number=4;
            const acceso:string="/"

            //asignacion de la cookie
            this.cookie.set('token', tokenSession , dias,acceso);

            // Ejemplo: Redirigir al usuario o guardar el token
             this.router.navigate(['/tracks']);
          },
          error: (err) => {
            // Este bloque captura errores (401 Unauthorized, 500 Server Error, etc.)
            alert("ocurrio un error con el email o el password");
          }
    });
  }

}
