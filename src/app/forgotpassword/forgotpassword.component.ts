import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-forgotpassword',
  imports: [
    PasswordModule,
    FloatLabelModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    RouterLink
  ],
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css'
})
export class ForgotpasswordComponent {
  tittle = 'Bienvenidos'
  subtitle = 'Ingrese el correo para poder recuperar su contraseña'

  visible = false;

  dialogShow = (visible:boolean) => {
    this.visible = true;
  }
}
