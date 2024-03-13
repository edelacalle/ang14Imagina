import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formsignup',
  templateUrl: './formsignup.component.html',
  styleUrls: ['./formsignup.component.css']
})
export class FormsignupComponent implements OnInit {
  myErrors:any = {};
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
  

    if (this.form.valid) {
      // Realiza la lógica de registro aquí
      console.log('Formulario válido. Datos enviados:', this.form.value);
    }
    
  }

  validateAllFormControl(formGroup: FormGroup) {         
    this.myErrors = {};
    let me = this;
    Object.keys(formGroup.controls).forEach(field => {  
      const control = formGroup.get(field);             
      if (control instanceof FormControl) {             
        let ctrl = control as FormControl;
        if(!ctrl.valid){
          me.myErrors[field] = ctrl.errors;
        }
      }
    });
    if(formGroup.controls["password"].value != formGroup.controls["confirmPassword"].value){
      me.myErrors["confirmPassword"] = "Contraseñas distintas";
      this.form.setErrors({ 'invalid': true });
    }
  }
  
  ngDoCheck(){
    this.validateAllFormControl(this.form)
  }


}
