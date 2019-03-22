import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from '@app/core/utils/customValidators';
import {AccountService} from '@app/modules/account/services/account.service';
import {ToastrService} from 'ngx-toastr';
import {DataService} from '@app/core/services/data.service';
import {HttpErrorResponse} from '@angular/common/http';
import {StorageService} from '@app/modules/account/services/storage.service';
import {TokenService} from '@app/modules/account/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [TokenService]
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  isEnabled: boolean;
  isLoading: boolean;
  hide: boolean;
  isRememberMeChecked: boolean;


  constructor(private fb: FormBuilder, private renderer: Renderer2,
              private accountService: AccountService, public router: Router,
              private toastrService: ToastrService, private dataService: DataService,
              private storageService: StorageService, private tokenService: TokenService,
  ) {
    this.createLoginForm();
    this.renderer.addClass(document.body, 'login-bg');
  }

  ngOnInit() {
  }

  login(): void {
    if (this.loginForm.valid) {
      this.accountService.login(this.loginForm.getRawValue()).subscribe((response: any) => {
        console.log('response token : ', response.token);
        console.log('response user : ', response.user);

        this.tokenService.saveToken(response.token);
        // this.tokenService.saveCurrentUser(response.user);
        this.toastrService.success('You are logged In  ', 'Success', {
          timeOut: 3000,
          onActivateTick: true
        });
        this.router.navigate(['/dashboard']);
      }, (error: HttpErrorResponse) => {
        if (error.status === 403) {

          this.toastrService.warning('Something Went Wrong ', 'Warning', {
            timeOut: 3000,
            onActivateTick: true
          });
          this.dataService.user = new Object();
          this.dataService.user['email'] = this.loginForm.get('email').value || null;
          this.dataService.user['isRememberMeChecked'] = this.isRememberMeChecked || false;
          this.router.navigate(['/verifyAccount']);
        }
      });
    }
  }

  ngOnDestroy() {

    this.renderer.removeClass(document.body, 'login-bg'); // login-bg class remove onDestroy
  }

  private createLoginForm() {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.compose([CustomValidators.emailValidator])]),
      secret: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

  }

}
