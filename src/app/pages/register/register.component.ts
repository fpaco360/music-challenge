import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CONSTANTS } from '../../utils/constants';
import { MustMatch } from 'src/app/utils/must-match';
import { RegisterService } from './register.service';
import { User } from '../../utils/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public hidePassword: boolean;
  public lbl: any = {
    welcomeText: '¡Bienvenido!',
    nameField: 'Nombre',
    emailField: 'Correo electronico',
    phoneField: 'Teléfono',
    password: 'Contraseña',
    passwordConfirm: 'Confirmar contraseña',
    registerButton: 'Registrar',
    successMessage: 'Usuario registrado con éxito',
    closeBtn: 'Cerrar',
    fieldRequired: 'Campo requerido',
    fieldPattern: 'Formato inválido',
    formatEmailInvalid: 'Formato de correo inválido'
  }
  constructor(private formBuilder: FormBuilder, private registerService: RegisterService, private snack: MatSnackBar,
      private router: Router) {
    this.initForm();
    this.hidePassword = true;
  }

  public ngOnInit(): void {
  }

  public initForm(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.pattern(CONSTANTS.PATTERN_NAME)]],
      phone: ['', [Validators.required, Validators.pattern(CONSTANTS.PATTERN_PHONE)]],
      password: ['', Validators.required],
    });
  }

  public registerUser(): void {
    const user: User = this.registerForm.value;
    this.registerService.saveUser(user);
    this.snack.open(this.lbl.successMessage, this.lbl.closeBtn, { duration: CONSTANTS.SNACK_TIME });
    this.router.navigate(['home']);
  }

  public getFormError(controlName: string): string {
    if (this.registerForm.get(controlName).getError('required')) {
      return this.lbl.fieldRequired;
    } else if (this.registerForm.get(controlName).getError('pattern')) {
      return this.lbl.fieldPattern;
    } else if (this.registerForm.get(controlName).getError('email')) {
      return this.lbl.formatEmailInvalid;
    }
  }

}
