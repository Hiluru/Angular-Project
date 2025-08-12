import { AbstractControl,FormGroup,ValidationErrors } from "@angular/forms";

export function emailvalid(control:AbstractControl): ValidationErrors | null {
 

    const value=control.value as string;

    const mailReg=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(value && !mailReg.test(value))
        {
            return {invalid:true}
        }
        return null;
}
export function passwordvalid(control : AbstractControl ) :ValidationErrors | null {
    const value=control.value as string

    const pattern=/^[A-Z].*[!@#$%^&*]$/;

    if(value && !pattern.test(value))
        {
            return {invalidpatter:true}
        }

        return null
}
export function passwordequal(pass : string , cpass : string ) {
    return (group:AbstractControl):ValidationErrors | null => {
        const password=group.get(pass)?.value;
        const cpassd=group.get(cpass)?.value;

        return password===cpassd? null :{notequal:true}
    }    
}