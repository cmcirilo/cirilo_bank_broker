import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoPageLogin } from '@po-ui/ng-templates';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthorizationService } from '../authorization/authorization.service';
import { UserLogin } from '../authorization/model/user-login';
import { MessagesService } from '../messages/messages.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public isLoading: boolean;
  public logo: string;
  public secondaryLogo: string;
  private subs = new Subscription();

  constructor(
    private route: Router,
    private authService: AuthorizationService,
    private messageService: MessagesService
  ) {
    this.logo = `../../${environment.imagesPath}/cirilobank.png`;
    this.secondaryLogo = `../../${environment.imagesPath}/cirilobank.png`;
  }

  ngOnInit() {
    this.authService.logout();
    this.isLoading = false;
  }

  onloginSubmit(formData: PoPageLogin): void {
    const user: UserLogin = {
      userName: formData.login,
      password: formData.password,
      remindUser: formData.rememberUser,
    };
    this.login(user);
  }

  private login(user: UserLogin): void {
    this.isLoading = true;

    this.subs.add(
      this.authService.login(user).subscribe(
        () => {
          this.isLoading = false;
          const redirect = this.authService.redirectUrl
            ? this.authService.redirectUrl
            : '/home';
          this.route.navigate([redirect]);
        },
        (error: HttpErrorResponse) => {
          this.isLoading = false;
          this.messageService.showMessageError('Senha inválida');
          this.route.navigate(['/login']);
        }
      )
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
