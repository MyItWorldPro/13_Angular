import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { customPasswordStrengthValidator } from "../custom-validators/passwordStrength.validator";


@Directive({
    selector: "[customPasswordStrength]",
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomPasswordStrengthDirective,
        multi: true
    }]
})
export class CustomPasswordStrengthDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
        return customPasswordStrengthValidator()(control);
    }
}