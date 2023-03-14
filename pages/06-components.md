# **Accesorios del ciclo de vida de los componentes:**

- Angular proporciona varios enlaces de ciclo de vida que le permiten ejecutar código en puntos específicos durante la vida útil de un componente.
- Estos ganchos incluyen ngOnInit, ngOnChanges, ngOnDestroy y más.
- Se pueden usar para realizar inicializaciones, responder a cambios y limpiar recursos.

```typescript
export class ExampleComponent implements OnInit, OnChanges, OnDestroy {
  ngOnInit(): void {
    // initialization logic goes here
  }

  ngOnChanges(): void {
    // change detection logic goes here
  }

  ngOnDestroy(): void {
    // cleanup logic goes here
  }
}
```

---

# **Decoradores de entrada y salida:**

- Los decoradores @Input y @Output se utilizan para comunicarse entre componentes principales y secundarios en Angular.

- @Input se usa para pasar datos del componente principal al componente secundario.

- @Output se usa para emitir eventos desde el componente secundario al componente principal.

```typescript
@Component({
  selector: "app-example",
  template: `
    <app-child
      [inputData]="exampleData"
      (outputData)="handleOutput($event)"
    ></app-child>
  `,
})
export class ExampleComponent {
  exampleData = "Example Data";

  handleOutput(data: any): void {
    // handle output data here
  }
}
```

---

```typescript
@Component({
  selector: "app-child",
  template: `
    <p>{{ inputData }}</p>
    <button (click)="emitOutput()">Emit Output</button>
  `,
})
export class ChildComponent {
  @Input() inputData: string;
  @Output() outputData = new EventEmitter<any>();

  emitOutput(): void {
    this.outputData.emit("Output Data");
  }
}
```

---

# **Interacción de componentes:**

- Angular proporciona varias formas de interactuar entre componentes, como usar decoradores @Input y @Output, usar un servicio compartido o usar una referencia local.

```typescript
@Injectable({
  providedIn: "root",
})
export class ExampleService {
  sharedData: string;
}

@Component({
  selector: "app-example",
  template: `
    <p>{{ exampleService.sharedData }}</p>
    <button (click)="updateSharedData()">Update Shared Data</button>
  `,
})
export class ExampleComponent {
  constructor(public exampleService: ExampleService) {}

  updateSharedData(): void {
    this.exampleService.sharedData = "New Shared Data";
  }
}
```
