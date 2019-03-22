import {FormControl, FormGroup} from '@angular/forms';

export class CustomValidators {

  /**
   * Regular Expression for Email
   * @type {RegExp}
   */
  private static emailRegexp: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{1,2}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private static httpRegexp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  /**
   * Regular Expression for Only number
   * @type {RegExp}
   */

  private static onlyNumbersRegexp: RegExp = /(^[0][1-9]+)|([1-9]\d*)$/;

  constructor() {
  }

  public static emailValidator(control: FormControl): { [key: string]: any } {
    if (control.value && !CustomValidators.emailRegexp.test(control.value)) {
      return {invalidEmail: true};
    }
  }


  /**
   * Numbers Only CustomValidators for Forms
   * @param control
   * @returns {any}
   */
  public static numbersOnlyValidator(control: FormControl) {
    if (control.value && !CustomValidators.onlyNumbersRegexp.test(control.value)) {
      return {invalidData: true};
    }
    return null;
  }


  /**
   * check for url validation
   * @param control
   * @returns {{invalidURl: boolean}}
   */
  public static urlValidator(control: FormControl): { [key: string]: any } {
    if (control.value && !CustomValidators.httpRegexp.test(control.value)) {
      return {invalidUrl: true};
    }
  }


  /**
   * check for matching passwords
   * @param passwordKey
   * @param confirmPasswordKey
   * @returns {function(FormGroup): {}}
   */
  public static matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): { [key: string]: any } => {
      const password = group.controls[passwordKey];
      const confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    };
  }

}
