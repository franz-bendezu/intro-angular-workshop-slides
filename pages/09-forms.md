Angular proporciona dos enfoques para manejar formularios en aplicaciones web:

## Formularios basados en plantillas

Este enfoque permite crear formularios usando plantillas angulares, sin requerir un manejo o validación de datos explícitos. Los controles de formulario y sus estados son rastreados por las directivas de formulario Angular. Este enfoque es adecuado para formularios de tamaño pequeño a mediano, donde la validación de datos no es compleja.

```html
<form #myForm="ngForm" (ngSubmit)="onSubmit(myForm.value)">
  <label for="name">Name:</label>
  <input type="text" name="name" ngModel required />

  <label for="email">Email:</label>
  <input type="email" name="email" ngModel required />

  <button type="submit">Submit</button>
</form>
```

---

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-my-form",
  templateUrl: "./my-form.component.html",
})
export class MyFormComponent {
  onSubmit(formData: any) {
    console.log(formData);
  }
}
```

---

## Formulario reactivo

Este enfoque se basa en la programación reactiva, donde los controles de formulario y sus estados son administrados por un modelo de datos subyacente. Los formularios reactivos requieren un manejo de datos explícito y brindan más flexibilidad y control sobre la validación del formulario. Este enfoque es adecuado para formularios grandes y complejos, donde la validación de datos es fundamental.

```html
<form [formGroup]="myForm" (ngSubmit)="onSubmit(myForm.value)">
  <label for="name">Name:</label>
  <input type="text" formControlName="name" required />

  <label for="email">Email:</label>
  <input type="email" formControlName="email" required />

  <button type="submit">Submit</button>
</form>
```

---

```typescript
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-my-form",
  templateUrl: "./my-form.component.html",
})
export class MyFormComponent implements OnInit {
  myForm: FormGroup;

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
    });
  }

  onSubmit(formData: any) {
    console.log(formData);
  }
}
```

---

## Validación de formulario

Angular proporciona validadores integrados para escenarios de validación de formularios comunes, como campos obligatorios, formato de correo electrónico y longitud mínima/máxima. También se pueden crear validadores personalizados para implementar reglas de validación específicas.

```html
<form #myForm="ngForm" (ngSubmit)="onSubmit(myForm.value)">
  <label for="name">Name:</label>
  <input type="text" name="name" ngModel required />

  <label for="email">Email:</label>
  <input type="email" name="email" ngModel required />

  <div *ngIf="myForm.invalid && (myForm.dirty || myForm.touched)">
    <p *ngIf="myForm.controls.name.errors?.required">Name is required</p>
    <p *ngIf="myForm.controls.email.errors?.required">Email is required</p>
    <p *ngIf="myForm.controls.email.errors?.email">Invalid email address</p>
  </div>

  <button type="submit" [disabled]="myForm.invalid">Submit</button>
</form>
```

---

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-my-form",
  templateUrl: "./my-form.component.html",
})
export class MyFormComponent {
  onSubmit(formData: any) {
    console.log(formData);
  }
}
```
