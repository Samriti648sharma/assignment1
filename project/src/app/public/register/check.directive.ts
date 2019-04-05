import { Directive, Input } from "@angular/core"; 
import { Validator, NG_VALIDATORS, AbstractControl} from '@angular/forms'; 


@Directive 
({ 
selector :'[appConfirmPasswordValidator]', 
providers : [{ 
provide : NG_VALIDATORS, 
useExisting : ConfirmPasswordDirective, 
multi :true 
}] 
}) 


//this directive checks whether the password and confirm password 
// field matches 
export class ConfirmPasswordDirective implements Validator 
{ 
@Input() appConfirmPasswordValidator: string; 
validate( control : AbstractControl) : {[key:string]:any} | null 
{ 

const controlToCompare = control.parent.get(this.appConfirmPasswordValidator); 
if(controlToCompare && controlToCompare.value !== control.value){ 
return {'notEqual': true}; 
} 


} 
}