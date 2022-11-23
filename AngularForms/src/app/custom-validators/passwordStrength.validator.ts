import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function customPasswordStrengthValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        const controlValue = control.value;

        if (!controlValue) {
            return null;
        }

        const hasUpperCaseLetters = /[A-Z]+/.test(controlValue);
        const haslowerCaseLetters = /[a-z]+/.test(controlValue);
        const hasNumericChar = /[0-9]+/.test(controlValue);
        const isPassValid = hasUpperCaseLetters && haslowerCaseLetters && hasNumericChar;

        return !isPassValid ? { passwordStrength: true } : null;
    }
}