import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { ToastService } from 'ngx-praxio-ui';

import { AuthenticationService, Logger } from '@app/core';
import { CredentialsModel } from '@app/core/domain/entities/credentials.model';
import { OAuthService } from 'angular-oauth2-oidc';

const log = new Logger('LoginUsuario');

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.scss']
})
export class LoginUsuarioComponent implements OnInit {
  @Output() changeLogin = new EventEmitter<any>();

  loginForm: FormGroup;

  isLoading = false;

  constructor(
    private oauthService: OAuthService,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private toast: ToastService
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  login() {
    this.oauthService.initImplicitFlow('login');

    // this.isLoading = true;

    // this.authenticationService.login(this.loginForm.value)
    // .pipe(finalize(() => {
    //   this.isLoading = false;
    // }))
    // .subscribe((credentials: CredentialsModel) => {
    //   if (credentials) {
    //     this.authenticationService.setCredentials(credentials);
    //     this.changeLogin.emit(credentials);
    //   } else {
    //     this.toast.open('Usuário ou senha inválidos.');
    //   }
    // });
  }

}
