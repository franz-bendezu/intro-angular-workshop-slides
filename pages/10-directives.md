Las directivas son una característica poderosa en Angular que le permite modificar el comportamiento y la apariencia del DOM.

# Introducción a las directivas:

Las directivas se utilizan para adjuntar comportamientos adicionales y/o modificar la apariencia de elementos en la página. Se utilizan en el marcado de la plantilla con una sintaxis específica.

```typescript

```

---

# Directivas integradas:

Angular viene con un conjunto de directivas integradas que se pueden usar para lograr tareas comunes, como mostrar u ocultar elementos, iterar sobre arreglos, etc.

NgIf

```html
<div *ngIf="user">Welcome, {{user.name}}!</div>
```

NgFor

```html
<ul>
  <li *ngFor="let item of items; index as i">{{i}} - {{item}}</li>
</ul>
```

NgClass

```html
<div [ngClass]="{'text-success': isSuccess, 'text-danger': isError}">
  Some text
</div>
```

---

NgStyle

```html
html

<div [ngStyle]="{'background-color': bgColor, 'color': textColor}">
  Some text
</div>
```

---

# Creación de directivas personalizadas:

Angular también le permite crear sus propias directivas personalizadas que se adaptan a las necesidades de su aplicación. Puede crear directivas de atributo o estructurales según sus requisitos.

## Directiva de atributo

```typescript
import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[appMyDirective]",
})
export class MyDirectiveDirective {
  @Input("appMyDirective") color: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.color = this.color;
  }
}
```

---

## Directiva estructural

```typescript
import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appMyUnless]",
})
export class MyUnlessDirective {
  @Input() set appMyUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
```
